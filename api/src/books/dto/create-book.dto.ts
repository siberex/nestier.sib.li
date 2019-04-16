import { IsNotEmpty, IsString, MinLength } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';

export class CreateBookDto {
    @IsString()
    @IsNotEmpty({message: 'Title is too short'})
    @ApiModelProperty()
    readonly title: string;

    @IsString()
    @MinLength(2, {message: 'Author field is too short'})
    @ApiModelProperty({minLength: 2})
    readonly author: string;
}
