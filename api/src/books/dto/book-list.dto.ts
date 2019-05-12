import { IsInt, IsOptional, IsPositive } from 'class-validator';
import { ApiModelPropertyOptional } from '@nestjs/swagger';

export class BookListDto {
  @IsInt()
  @IsPositive()
  @IsOptional()
  @ApiModelPropertyOptional({
    description: 'Number of records to skip',
    default: 0,
    type: Number,
  })
  readonly skip?: number;
}
