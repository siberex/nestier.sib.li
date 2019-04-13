export enum UserRole {
    Guest,
    User,
    Admin,
}

export interface User {
    id: number;
    login: string;
    password: string;
    role: UserRole;
}
