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
import { HashService } from '../auth/hash.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UserListResultDto } from './dto/user-list-result.dto';
import { UserListDto } from './dto/user-list.dto';
import { UsersService } from './users.service';
import { User } from './user.entity';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {
  }

  @Get('hash')
  // @fixme remove debug
  async debugHash(@Query('password') password: string): Promise<object> {
    const hash = await HashService.hash(password);
    return {
      hash,
      uri: `/verify/?password=${password}&hash=${encodeURIComponent(hash)}`,
    };
  }

  @Get('verify')
  // @fixme remove debug
  async debugVerify(@Query('password') password: string, @Query('hash') hash: string): Promise<boolean> {
    return await HashService.verify(password, hash);
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
  @ApiOkResponse({type: UserListResultDto})
  // @fixme add admin-only Guard
  async findAll(@Query() params: UserListDto): Promise<UserListResultDto> {
    const [users, count] = await this.usersService.findAll(params.skip);
    return {users, count, skip: params.skip};
  }

  @Get(':id')
  @UseInterceptors(ClassSerializerInterceptor)
  @ApiOperation({title: 'Get user by id'})
  @ApiOkResponse({type: User})
  async getById(@Param('id', new ParseIntPipe()) id: number): Promise<User> {
    return this.usersService.getById(id);
  }
}
