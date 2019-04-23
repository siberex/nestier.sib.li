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
import { ApiBadRequestResponse, ApiCreatedResponse, ApiOkResponse, ApiOperation, ApiResponseModelProperty } from '@nestjs/swagger';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
import { User } from './user.entity';

export class UserList {
  @ApiResponseModelProperty({ type: [User] })
  readonly users: User[];
  @ApiResponseModelProperty()
  readonly count: number;
  @ApiResponseModelProperty()
  readonly skip: number;
}

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
  @ApiOkResponse({type: UserList})
  // @fixme add admin-only Guard
  async findAll(@Query('skip', new ParseIntPipe()) skip: number = 0): Promise<UserList> {
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
