"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
let AuthService = class AuthService {
    users = [
        {
            id: 1,
            login: "test@test.local",
            password: "testPwd!23",
            firstName: "Test",
            lastName: "User",
            gender: "male",
            age: 25,
            createdAt: new Date('2024-01-01')
        },
        {
            id: 2,
            login: "ivan@test.local",
            password: "qwqrty1234",
            firstName: "Ivan",
            lastName: "Ivanov",
            gender: "male",
            age: 30,
            createdAt: new Date('2024-01-02')
        },
    ];
    nextId = 3;
    login(login, password) {
        const user = this.users.find((user) => user.login === login);
        if (!user) {
            throw new common_1.UnauthorizedException("Неверный логин или пароль");
        }
        if (user.password === password) {
            const { password: _, ...userWithoutPassword } = user;
            return userWithoutPassword;
        }
        else {
            throw new common_1.UnauthorizedException("Неверный логин или пароль");
        }
    }
    register(email, password, firstName, lastName, gender, age) {
        const existingUser = this.users.find((user) => user.login === email);
        if (existingUser) {
            throw new common_1.ConflictException("Пользователь с таким email уже существует");
        }
        if (password.length < 8) {
            throw new common_1.BadRequestException("Пароль должен содержать минимум 8 символов");
        }
        const newUser = {
            id: this.nextId++,
            login: email,
            password: password,
            firstName,
            lastName,
            gender,
            age,
            createdAt: new Date()
        };
        this.users.push(newUser);
        console.log(`Зарегистрирован новый пользователь: ${email}`);
        console.log(`Всего пользователей в системе: ${this.users.length}`);
        const { password: _, ...userWithoutPassword } = newUser;
        return {
            message: "Пользователь успешно зарегистрирован",
            user: userWithoutPassword
        };
    }
    getAllUsers() {
        return this.users.map(user => {
            const { password, ...userWithoutPassword } = user;
            return userWithoutPassword;
        });
    }
    findUserByEmail(email) {
        const user = this.users.find(user => user.login === email);
        if (user) {
            const { password, ...userWithoutPassword } = user;
            return userWithoutPassword;
        }
        return null;
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)()
], AuthService);
//# sourceMappingURL=auth.service.js.map