import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';
import { IsNotEmpty, MinLength } from 'class-validator';
import { ApiResponseModelProperty } from '@nestjs/swagger';

@Entity()
export class Book {
    @PrimaryGeneratedColumn()
    @ApiResponseModelProperty()
    id: number;

    @Column({ length: 300 })
    @Index()
    @IsNotEmpty()
    @ApiResponseModelProperty()
    title: string;

    @Column({ length: 300 })
    @Index()
    @MinLength(2)
    @ApiResponseModelProperty()
    author: string;

    constructor(partial?: Partial<Book>) {
        Object.assign(this, partial);
    }
}
