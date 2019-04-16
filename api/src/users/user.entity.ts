import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';
import { MinLength } from 'class-validator';
import { Exclude } from 'class-transformer';

export enum UserRole {
    GUEST = 'guest',
    USER = 'user',
    ADMIN = 'admin',
}

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 200 })
    @Index({ unique: true })
    @MinLength(1, {message: 'Login is too short'})
    login: string;

    @Column({ length: 128 })
    @Exclude()
    hash: string;

    @Column({ length: 32 })
    @Exclude()
    salt: string;

    @Column({
        type: 'enum',
        enum: UserRole,
        default: UserRole.USER,
    })
    role: UserRole;

    constructor(partial?: Partial<User>) {
        Object.assign(this, partial);
    }
}
