import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Book } from './book.entity';

@Injectable()
export class BooksService {
    constructor(
        @InjectRepository(Book)
        private readonly bookRepository: Repository<Book>,
    ) {}

    async create(book: Book): Promise<Book> {
        return await this.bookRepository.create(book);
    }

    async findAll(): Promise<Book[]> {
        return await this.bookRepository.find();
    }

    async findOne(id: number): Promise<Book> {
        return await this.bookRepository.findOne(id);
    }
}
