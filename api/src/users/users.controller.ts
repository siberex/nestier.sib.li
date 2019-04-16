import {
    Body,
    ClassSerializerInterceptor,
    Controller,
    Get,
    Param,
    ParseIntPipe,
    Post,
    UseInterceptors,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
import { User } from './user.entity';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Post()
    @UseInterceptors(ClassSerializerInterceptor)
    async create(@Body() createUserDto: CreateUserDto): Promise<User> {
        return this.usersService.create(createUserDto);
    }

    @Get()
    @UseInterceptors(ClassSerializerInterceptor)
    async findAll(): Promise<User[]> {
        return this.usersService.findAll();
    }

    @Get(':id')
    @UseInterceptors(ClassSerializerInterceptor)
    async getById(@Param('id', new ParseIntPipe()) id: number): Promise<User> {
        return this.usersService.getById(id);
    }
}
