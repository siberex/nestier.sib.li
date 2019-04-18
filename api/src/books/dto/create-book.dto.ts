import { IsInt, IsNotEmpty, IsOptional, IsString, IsUrl, Max, Min, MinLength } from 'class-validator';
import { ApiModelProperty, ApiModelPropertyOptional } from '@nestjs/swagger';

export class CreateBookDto {
  @IsString()
  @IsNotEmpty({message: 'Title is too short'})
  @ApiModelProperty({
    example: 'Towers of Midnight',
  })
  readonly title: string;

  @IsString()
  @MinLength(2, {message: 'Author field is too short'})
  @ApiModelProperty({
    minLength: 2,
    example: 'Robert Jordan, Brandon Sanderson',
  })
  readonly author: string;

  @IsOptional()
  @IsInt()
  @Min(1000)
  @Max((new Date()).getFullYear() + 5)
  @ApiModelPropertyOptional({
    minimum: 1000,
    maximum: (new Date()).getFullYear() + 5,
    example: 2010,
  })
  readonly year: number;

  @IsOptional()
  @IsUrl({require_valid_protocol: true, require_tld: true, protocols: ['https']})
  @ApiModelPropertyOptional({
    format: 'uri',
    pattern: '^https:\\/\\/.+\\.(jpg|png)$',
  })
  readonly cover: string;
}
