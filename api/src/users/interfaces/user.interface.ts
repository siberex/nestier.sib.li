export enum UserRole {
    GUEST = 'guest',
    USER = 'user',
    ADMIN = 'admin',
}

export interface User {
    readonly id: number;
    readonly login: string;
    readonly password: string;
    readonly role: UserRole;
}
