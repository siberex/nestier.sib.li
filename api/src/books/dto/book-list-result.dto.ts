import { ApiResponseModelProperty } from '@nestjs/swagger';
import { Book } from '../book.entity';

export class BookListResultDto {
  @ApiResponseModelProperty({ type: [Book] })
  readonly books: Book[];
  @ApiResponseModelProperty()
  readonly count: number;
  @ApiResponseModelProperty()
  readonly skip: number;
}
