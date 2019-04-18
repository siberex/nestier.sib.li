import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';
import { IsNotEmpty } from 'class-validator';
import { Exclude } from 'class-transformer';
import { ApiResponseModelProperty } from '@nestjs/swagger';

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

  @Column({length: 128})
  @Exclude()
  hash: string;

  @Column({length: 32})
  @Exclude()
  salt: string;

  @Column({
    type: 'enum',
    enum: UserRole,
    default: UserRole.USER,
  })
  @ApiResponseModelProperty()
  role: UserRole;

  constructor(partial?: Partial<User>) {
    Object.assign(this, partial);
  }
}
