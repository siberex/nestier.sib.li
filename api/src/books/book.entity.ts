import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';
import { MinLength } from 'class-validator';

@Entity()
export class Book {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 300 })
    @Index()
    @MinLength(1, {message: 'Title is too short'})
    title: string;

    @Column({ length: 300 })
    @Index()
    @MinLength(1, {message: 'Author field is too short'})
    author: string;

    constructor(partial?: Partial<Book>) {
        Object.assign(this, partial);
    }
}
