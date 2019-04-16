import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { validate } from 'class-validator';
import { Book } from './book.entity';
import { CreateBookDto } from './dto/create-book.dto';

@Injectable()
export class BooksService {
    constructor(
        @InjectRepository(Book)
        private readonly bookRepository: Repository<Book>,
    ) {}

    async create(bookData: CreateBookDto): Promise<Book> {
        const book: Book = new Book();

        // @fixme Check for existing record
        book.author = bookData.author;
        book.title = bookData.title;

        const errors = await validate(book);
        return await this.bookRepository.save(book);
    }

    async findAll(): Promise<Book[]> {
        return await this.bookRepository.find();
    }

    async findOne(id: number): Promise<Book> {
        return await this.bookRepository.findOne(id);
    }
}
