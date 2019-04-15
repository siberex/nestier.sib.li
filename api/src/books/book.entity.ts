import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { Book as iBook } from './interfaces/book.interface';

@Entity()
export class Book implements iBook {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 300 })
    title: string;

    @Column({ length: 300 })
    author: string;

    constructor() {

    }
}
