import { Body, Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { ApiCreatedResponse, ApiBadRequestResponse, ApiOperation, ApiOkResponse } from '@nestjs/swagger';
import { BooksService } from './books.service';
import { Book } from './book.entity';
import { CreateBookDto } from './dto/create-book.dto';

@Controller('books')
export class BooksController {
    constructor(private readonly booksService: BooksService) {}

    @Post()
    @ApiOperation({ title: 'Create book' })
    @ApiCreatedResponse({ type: Book, description: 'Book has been successfully created.' })
    async create(@Body() createBookDto: CreateBookDto): Promise<Book> {
        return this.booksService.create(createBookDto);
    }

    @Get()
    @ApiOkResponse({ type: [Book] })
    async findAll(): Promise<Book[]> {
        return this.booksService.findAll();
    }

    @Get(':id')
    @ApiOperation({ title: 'Get book by id' })
    @ApiOkResponse({ type: Book })
    async findOne(@Param('id', new ParseIntPipe()) id: number): Promise<Book> {
        return this.booksService.findOne(id);
    }
}
