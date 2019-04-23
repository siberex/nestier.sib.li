import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post, Query,
  UseInterceptors,
} from '@nestjs/common';
import { ApiBadRequestResponse, ApiCreatedResponse, ApiImplicitQuery, ApiOkResponse, ApiOperation } from '@nestjs/swagger';
import { CreateUserDto } from './dto/create-user.dto';
import { UserListDto } from './dto/user-list.dto';
import { UsersService } from './users.service';
import { User } from './user.entity';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {
  }

  @Post()
  @UseInterceptors(ClassSerializerInterceptor)
  @ApiOperation({title: 'Create user'})
  @ApiCreatedResponse({type: User, description: 'User has been successfully created.'})
  @ApiBadRequestResponse({description: 'Login already exists'})
  async create(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.usersService.create(createUserDto);
  }

  @Get()
  @UseInterceptors(ClassSerializerInterceptor)
  @ApiOkResponse({type: UserListDto})
  // @fixme add admin-only Guard
  @ApiImplicitQuery({ name: 'skip', required: false, type: Number, description: 'Skip number of records' })
  async findAll(@Query('skip', new ParseIntPipe()) skip: number = 0): Promise<UserListDto> {
    const [users, count] = await this.usersService.findAll(skip);
    return {users, count, skip};
  }

  @Get(':id')
  @UseInterceptors(ClassSerializerInterceptor)
  @ApiOperation({title: 'Get user by id'})
  @ApiOkResponse({type: User})
  async getById(@Param('id', new ParseIntPipe()) id: number): Promise<User> {
    return this.usersService.getById(id);
  }
}
