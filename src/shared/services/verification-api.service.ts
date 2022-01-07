/* eslint-disable @typescript-eslint/tslint/config */
/* eslint-disable @typescript-eslint/naming-convention */
import '@tensorflow/tfjs-node';

import { Injectable } from '@nestjs/common';
import canvas from 'canvas';
import * as faceapi from 'face-api.js';
import fetch from 'node-fetch';
import path from 'path';

export const MODELS_URL = path.join(__dirname, '../../../', 'public/models');

// interface IVerifyResponse {
//     data: {
//         resultIndex: number;
//         resultMessage: string;
//         similarPercent: number;
//     };
// }

@Injectable()
export class VerificationApiService {
    private readonly ssdMobileNet: faceapi.SsdMobilenetv1Options;

    constructor() {
        this.ssdMobileNet = new faceapi.SsdMobilenetv1Options({
            minConfidence: 0.5,
        });
        await this.loadModel();
    }

    async loadModel(): Promise<void> {
        await faceapi.nets.faceRecognitionNet.loadFromDisk(MODELS_URL);
        await faceapi.nets.faceLandmark68Net.loadFromDisk(MODELS_URL);
        await faceapi.nets.ssdMobilenetv1.loadFromDisk(MODELS_URL);
        await faceapi.nets.ageGenderNet.loadFromDisk(MODELS_URL);
        await faceapi.nets.faceExpressionNet.loadFromDisk(MODELS_URL);
    }

    async verify(linkFile1: string, linkFile2: string): Promise<boolean> {
        // Prepare lib
        const { Canvas, Image, ImageData } = canvas as any;
        const fetchClone: any = fetch;
        faceapi.env.monkeyPatch({ Canvas, Image, ImageData });
        faceapi.env.monkeyPatch({ fetch: fetchClone });

        // Load model data
        // const image = await faceapi.get
        const img1: any = await canvas.loadImage(linkFile1);
        // Extract all face in pics
        const realFace = await faceapi
            .detectSingleFace(img1, this.ssdMobileNet)
            .withFaceLandmarks()
            .withFaceDescriptor();

        const img2: any = await canvas.loadImage(linkFile1);
        // Extract all face in pics
        const faceToDetect = await faceapi
            .detectAllFaces(img2, this.ssdMobileNet)
            .withFaceLandmarks()
            .withFaceDescriptors();

        if (!realFace) {
            throw new Error('no faces detected for');
        }

        const faceDescriptors = [realFace.descriptor];
        const labeledFaceDescriptors = new faceapi.LabeledFaceDescriptors(
            'Hoang',
            faceDescriptors,
        );
        // eslint-disable-next-line no-restricted-syntax

        const maxDescriptorDistance = 0.6;
        const faceMatcher = new faceapi.FaceMatcher(
            labeledFaceDescriptors,
            maxDescriptorDistance,
        );

        const results = faceToDetect.map((fd) =>
            faceMatcher.findBestMatch(fd.descriptor),
        );

        // const detections2: any = await faceapi.detectAllFaces(
        //     linkFile2,
        //     this.ssdMobileNet,
        // );

        // eslint-disable-next-line no-restricted-syntax
        console.log({ results, linkFile2 });
        return true;
    }
}
