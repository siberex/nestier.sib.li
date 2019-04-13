export enum UserRole {
    Guest,
    User,
    Admin,
}

export interface User {
    readonly id: number;
    readonly login: string;
    readonly password: string;
    readonly role: UserRole;
}
