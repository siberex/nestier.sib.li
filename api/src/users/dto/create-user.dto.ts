import { IsString } from 'class-validator';

export class CreateUserDto {
    @IsString()
    readonly login: string;

    @IsString()
    readonly password: string;
}
