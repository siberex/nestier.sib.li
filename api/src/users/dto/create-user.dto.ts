import { IsNotEmpty, IsString, MinLength } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';

export class CreateUserDto {
    @IsString()
    @IsNotEmpty({message: 'Login could not be empty'})
    @ApiModelProperty()
    readonly login: string;

    @IsString()
    @MinLength(3, {message: 'Password is too short'})
    @ApiModelProperty({minLength: 3})
    readonly password: string;
}
