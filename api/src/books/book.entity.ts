import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';
import { IsNotEmpty, MinLength } from 'class-validator';

@Entity()
export class Book {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 300 })
    @Index()
    @IsNotEmpty()
    title: string;

    @Column({ length: 300 })
    @Index()
    @MinLength(2)
    author: string;

    constructor(partial?: Partial<Book>) {
        Object.assign(this, partial);
    }
}
