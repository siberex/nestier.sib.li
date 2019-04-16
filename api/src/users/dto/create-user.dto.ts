import { IsString, MinLength } from 'class-validator';

export class CreateUserDto {
    @IsString()
    @MinLength(1, {message: 'Login is too short'})
    readonly login: string;

    @IsString()
    @MinLength(3, {message: 'Password is too short'})
    readonly password: string;
}
