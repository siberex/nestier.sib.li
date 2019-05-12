import { ApiResponseModelProperty } from '@nestjs/swagger';
import { User } from '../user.entity';

export class UserListResultDto {
  @ApiResponseModelProperty({ type: [User] })
  readonly users: User[];
  @ApiResponseModelProperty()
  readonly count: number;
  @ApiResponseModelProperty()
  readonly skip: number;
}
