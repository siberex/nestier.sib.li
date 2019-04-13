import { Injectable } from '@nestjs/common';
import { Book } from './interfaces/book.interface';

@Injectable()
export class BooksService {
    private readonly books: Book[] = [];

    create(book: Book) {
        this.books.push(book);
    }

    findAll(): Book[] {
        return this.books;
    }

    findOne(id: number): Book {
        return this.books.find(
            book => (book.id === id),
        );
    }
}
