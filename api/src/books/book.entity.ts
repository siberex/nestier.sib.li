import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';
import { IsInt, IsNotEmpty, IsUrl, MinLength } from 'class-validator';
import { ApiResponseModelProperty } from '@nestjs/swagger';

@Entity('books')
export class Book {
    @PrimaryGeneratedColumn()
    @ApiResponseModelProperty({example: 1})
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

    @Column()
    @IsInt()
    @ApiResponseModelProperty({example: 2019})
    year: number;

    @Column()
    @IsUrl()
    @ApiResponseModelProperty()
    cover: string;

    constructor(partial?: Partial<Book>) {
        Object.assign(this, partial);
    }
}
