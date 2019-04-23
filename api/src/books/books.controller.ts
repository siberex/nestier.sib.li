import { Body, Controller, Get, Param, ParseIntPipe, Post, Query } from '@nestjs/common';
import { ApiCreatedResponse, ApiImplicitQuery, ApiOkResponse, ApiOperation } from '@nestjs/swagger';
import { BooksService } from './books.service';
import { Book } from './book.entity';
import { BookListDto } from './dto/book-list.dto';
import { CreateBookDto } from './dto/create-book.dto';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {
  }

  @Post()
  @ApiOperation({title: 'Create book'})
  @ApiCreatedResponse({type: Book, description: 'Book has been successfully created.'})
  async create(@Body() createBookDto: CreateBookDto): Promise<Book> {
    return this.booksService.create(createBookDto);
  }

  @Get()
  @ApiOperation({title: 'Get list of books'})
  @ApiOkResponse({type: BookListDto})
  @ApiImplicitQuery({ name: 'skip', required: false, type: Number, description: 'Skip number of records' })
  async findAll(@Query('skip', new ParseIntPipe()) skip: number = 0): Promise<BookListDto> {
    const [books, count] = await this.booksService.findAll(skip);
    return {books, count, skip};
  }

  @Get(':id')
  @ApiOperation({title: 'Get book by id'})
  @ApiOkResponse({type: Book})
  async findOne(@Param('id', new ParseIntPipe()) id: number): Promise<Book> {
    return this.booksService.getById(id);
  }
}
