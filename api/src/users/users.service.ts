import * as crypto from 'crypto';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
    ) {}

    async create(userData: CreateUserDto): Promise<User> {
        const user: User = new User();

        // @fixme Check for existing login
        user.login = userData.login;

        user.salt = crypto.randomBytes(16).toString('hex');
        user.hash = crypto.pbkdf2Sync(
            userData.password, user.salt,
           999, 64, 'sha512').toString('hex');

        return await this.userRepository.save(user);
    }

    async findAll(): Promise<User[]> {
        return await this.userRepository.find({
            select: ['id', 'login', 'role'],
        });
    }

    async findOne(id: number): Promise<User> {
        return await this.userRepository.findOne(id, {
            select: ['id', 'login', 'role'],
        });
    }

    async findLogin(login: string): Promise<User> {
        return await this.userRepository.findOne({
            select: ['id', 'login', 'role'],
            where: {login},
        });
    }
}
