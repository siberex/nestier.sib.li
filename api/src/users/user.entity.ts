import { Column, Entity, Index, PrimaryGeneratedColumn, ManyToMany, JoinTable } from 'typeorm';
import { IsNotEmpty } from 'class-validator';
import { Exclude } from 'class-transformer';
import { ApiResponseModelProperty } from '@nestjs/swagger';
import { Book } from '../books/book.entity';

export enum UserRole {
  GUEST = 'guest',
  USER = 'user',
  ADMIN = 'admin',
}

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  @ApiResponseModelProperty()
  id: number;

  @Column({length: 200})
  @Index({unique: true})
  @IsNotEmpty()
  @ApiResponseModelProperty()
  login: string;

  @Column({length: 128, select: false})
  @Exclude()
  hash: string;

  @Column({length: 32, select: false})
  @Exclude()
  salt: string;

  @Column({
    type: 'enum',
    enum: UserRole,
    default: UserRole.USER,
  })
  @ApiResponseModelProperty()
  role: UserRole;

  @ManyToMany(type => Book)
  @JoinTable()
  books: Book[];

  constructor(partial?: Partial<User>) {
    Object.assign(this, partial);
  }
}
