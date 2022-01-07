import { Injectable } from '@nestjs/common';
import AWS from 'aws-sdk';
import mime from 'mime-types';

import { IFile } from '../../interfaces/IFile';
import { ConfigService } from './config.service';
import { GeneratorService } from './generator.service';

@Injectable()
export class AwsS3Service {
    private readonly s3: AWS.S3;

    constructor(
        public configService: ConfigService,
        public generatorService: GeneratorService,
    ) {
        // const options: AWS.S3.Types.ClientConfiguration = {
        //     apiVersion: '2010-12-01',
        //     region: 'ap-southeast-1',
        // };

        const awsS3Config = configService.awsS3Config;
        // if (awsS3Config.accessKeyId && awsS3Config.secretAccessKey) {
        //     options.credentials = awsS3Config;
        // }

        AWS.config.update(awsS3Config);

        this.s3 = new AWS.S3();
    }

    async uploadImage(file: IFile): Promise<string> {
        return new Promise((resolve, reject) => {
            try {
                const fileName = this.generatorService.fileName(
                    <string>mime.extension(file.mimetype),
                );
                const key = 'images/' + fileName;
                const params = {
                    Bucket: this.configService.awsS3Config.bucketName,
                    Body: file.buffer,
                    ACL: 'public-read',
                    Key: key,
                    ContentType: 'image/jpeg',
                };

                this.s3.upload(params, (err: any, res: any) => {
                    // eslint-disable-next-line no-restricted-syntax
                    console.log(
                        'awsS3Config >>>>> ',
                        this.configService.awsS3Config,
                    );
                    if (err) {
                        return reject(err);
                    }
                    return resolve(res.Location);
                });
            } catch (err) {
                return reject(err);
            }
        });
    }
}
