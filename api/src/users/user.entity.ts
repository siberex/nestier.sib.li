import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { UserRole, User as iUser } from './interfaces/user.interface';

@Entity()
export class User implements iUser {
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
