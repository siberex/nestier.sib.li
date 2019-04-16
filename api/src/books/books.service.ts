import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Book } from './book.entity';
import { CreateBookDto } from './dto/create-book.dto';

@Injectable()
export class BooksService {
    constructor(
        @InjectRepository(Book)
        private readonly bookRepository: Repository<Book>,
    ) {}

    async create(bookData: CreateBookDto): Promise<Book> {
        // @fixme Check for existing record
        const book: Book = new Book(bookData);

        return await this.bookRepository.save(book);
    }

    async findAll(): Promise<Book[]> {
        return await this.bookRepository.find();
    }

    async findOne(id: number): Promise<Book> {
        return await this.bookRepository.findOne(id);
    }
}
