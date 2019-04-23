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
  ) {
  }

  async create(bookData: CreateBookDto): Promise<Book> {
    // @fixme Check for existing record
    const book: Book = new Book(bookData);

    return await this.bookRepository.save(book);
  }

  async findAll(skip: number = 0): Promise<[Book[], number]> {
    const limit: number = 50;

    return await this.bookRepository.createQueryBuilder('book')
      .orderBy('book.year', 'DESC')
      .addOrderBy('book.id', 'DESC')
      .skip(skip)
      .take(limit)
      .getManyAndCount();
  }

  async findOne(id: number): Promise<Book> {
    return await this.bookRepository.findOne(id);
  }
}
