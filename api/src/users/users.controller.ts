import { Controller, Get, Param, Req } from '@nestjs/common';

@Controller('users')
export class UsersController {
    @Get()
    findAll(@Req() request: Request): object[] {
        return [{}, {}, {}];
    }

    @Get(':id')
    findOne(@Param() params): string {
        return `${params.id}`;
    }
}
