import { Controller, Get, Param, Req } from '@nestjs/common';

@Controller('books')
export class BooksController {
    @Get()
    findAll(@Req() request: Request): object[] {
        return [{}, {}, {}];
    }

    @Get(':id')
    findOne(@Param() params): string {
        return `${params.id}`;
    }
}
