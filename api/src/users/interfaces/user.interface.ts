export enum UserRole {
    Guest,
    User,
    Admin,
}

export interface User {
    login: string;
    password: string;
    role: UserRole;
}
