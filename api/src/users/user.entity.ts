import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

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
    login: string;

    @Column({ length: 64 })
    password: string;

    @Column({
        type: 'enum',
        enum: UserRole,
        default: UserRole.USER,
    })
    role: UserRole;
}
