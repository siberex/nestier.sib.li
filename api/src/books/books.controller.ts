import { Body, Controller, Get, Param, ParseIntPipe, Post, Query } from '@nestjs/common';
import { ApiCreatedResponse, ApiOkResponse, ApiOperation, ApiResponseModelProperty } from '@nestjs/swagger';
import { BooksService } from './books.service';
import { Book } from './book.entity';
import { CreateBookDto } from './dto/create-book.dto';

export class BookList {
  @ApiResponseModelProperty({ type: [Book] })
  readonly books: Book[];
  @ApiResponseModelProperty()
  readonly count: number;
  @ApiResponseModelProperty()
  readonly skip: number;
}

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
  @ApiOkResponse({type: BookList})
  async findAll(@Query('skip', new ParseIntPipe()) skip: number = 0): Promise<BookList> {
    const [books, count] = await this.booksService.findAll(skip);
    return {books, count, skip};
  }

  @Get(':id')
  @ApiOperation({title: 'Get book by id'})
  @ApiOkResponse({type: Book})
  async findOne(@Param('id', new ParseIntPipe()) id: number): Promise<Book> {
    return this.booksService.findOne(id);
  }
}
