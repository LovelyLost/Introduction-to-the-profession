export declare class AuthService {
    private users;
    private nextId;
    login(login: string, password: string): {
        id: number;
        login: string;
        firstName: string;
        lastName: string;
        gender: string;
        age: number;
        createdAt: Date;
    };
    register(email: string, password: string, firstName: string, lastName: string, gender: string, age: number): {
        message: string;
        user: {
            id: number;
            login: string;
            firstName: string;
            lastName: string;
            gender: string;
            age: number;
            createdAt: Date;
        };
    };
    getAllUsers(): {
        id: number;
        login: string;
        firstName: string;
        lastName: string;
        gender: string;
        age: number;
        createdAt: Date;
    }[];
    findUserByEmail(email: string): {
        id: number;
        login: string;
        firstName: string;
        lastName: string;
        gender: string;
        age: number;
        createdAt: Date;
    } | null;
}
