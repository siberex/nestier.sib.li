import * as crypto from 'crypto';
import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {
  }

  async create(userData: CreateUserDto): Promise<User> {
    const existing = await this.getByLogin(userData.login);
    if (existing) {
      throw new BadRequestException('Login already exists');
    }

    const salt = crypto.randomBytes(16).toString('hex');
    const hash = crypto.pbkdf2Sync(userData.password, salt,
      999, 64, 'sha512').toString('hex');

    const user: User = new User({
      login: userData.login,
      salt,
      hash,
    });

    return await this.userRepository.save(user);
  }

  async findAll(): Promise<User[]> {
    return await this.userRepository.find({
      select: ['id', 'login', 'role'],
    });
  }

  async getById(id: number): Promise<User> {
    return await this.userRepository.findOne(id);
  }

  async getByLogin(login: string): Promise<User> {
    return await this.userRepository.findOne({login});
  }
}
