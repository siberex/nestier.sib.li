import { Controller, Get, Param, Req } from '@nestjs/common';
import { BooksService } from './books.service';
import { Book } from './interfaces/book.interface';

@Controller('books')
export class BooksController {
    constructor(private readonly booksService: BooksService) {}

    @Get()
    async findAll(@Req() request: Request): Promise<Book[]> {
        return this.booksService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: string): Promise<Book> {
        return this.booksService.findOne(id as unknown as number);
    }
}
