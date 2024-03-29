import { BadRequestException, Injectable } from '@nestjs/common';
import { compareAsc } from 'date-fns';
import { FindConditions } from 'typeorm';

import { PageDto } from '../../common/dto/PageDto';
import { FileNotImageException } from '../../exceptions/file-not-image.exception';
import { IFile } from '../../interfaces/IFile';
import { AwsS3Service } from '../../shared/services/aws-s3.service';
import { ValidatorService } from '../../shared/services/validator.service';
import { UserRegisterDto } from '../auth/req/UserRegisterDto';
import { StudentRegisterDto } from './req/StudentRegisterDto';
import { UserDto } from './res/UserDto';
import { UsersPageOptionsDto } from './res/UsersPageOptionsDto';
import { UserEntity } from './user.entity';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
    constructor(
        public readonly userRepository: UserRepository,
        public readonly validatorService: ValidatorService,
        public readonly awsS3Service: AwsS3Service,
    ) {}

    /**
     * Find single user
     */
    findOne(findData: FindConditions<UserEntity>): Promise<UserEntity> {
        return this.userRepository.findOne(findData);
    }
    async findByUsernameOrEmail(
        options: Partial<{ username: string; email: string }>,
    ): Promise<UserEntity | undefined> {
        const queryBuilder = this.userRepository.createQueryBuilder('user');

        if (options.email) {
            queryBuilder.orWhere('user.email = :email', {
                email: options.email,
            });
        }
        if (options.username) {
            queryBuilder.orWhere('user.username = :username', {
                username: options.username,
            });
        }

        return queryBuilder.getOne();
    }

    async createUser(
        userRegisterDto: UserRegisterDto,
        file: IFile,
    ): Promise<UserEntity> {
        const user = this.userRepository.create(userRegisterDto);

        if (file && !this.validatorService.isImage(file.mimetype)) {
            throw new FileNotImageException();
        }

        if (file) {
            user.avatar = await this.awsS3Service.uploadImage(file);
        }

        return this.userRepository.save(user);
    }

    async addStudent(
        studentRegisterDto: StudentRegisterDto,
        file: IFile,
    ): Promise<UserEntity> {
        const isValidYear = compareAsc(
            new Date(studentRegisterDto.yearOfAdmission),
            new Date(),
        );

        if (isValidYear === -1) {
            throw new BadRequestException(
                `Invalid. yearOfAdmission must be greater than or equal ${Date.now()}`,
            );
        }

        const user = this.userRepository.create(studentRegisterDto);

        if (file && !this.validatorService.isImage(file.mimetype)) {
            throw new FileNotImageException();
        }

        if (file) {
            user.avatar = await this.awsS3Service.uploadImage(file);
        }

        return this.userRepository.save(user);
    }

    async getUsers(
        pageOptionsDto: UsersPageOptionsDto,
    ): Promise<PageDto<UserDto>> {
        const queryBuilder = this.userRepository.createQueryBuilder('user');
        const { items, pageMetaDto } = await queryBuilder.paginate(
            pageOptionsDto,
        );

        return items.toPageDto(pageMetaDto);
    }

    async getUser(userId: string): Promise<UserDto> {
        const queryBuilder = this.userRepository.createQueryBuilder('user');

        queryBuilder.where('user.id = :userId', { userId });

        const userEntity = await queryBuilder.getOne();

        return userEntity.toDto();
    }
}
