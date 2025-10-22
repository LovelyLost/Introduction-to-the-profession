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
            login: "test@test.local",
            password: "testPwd!23",
        },
        {
            login: "ivan@test.local",
            password: "qwqrty1234",
        },
    ];
    login(login, password) {
        const user = this.users.find((user) => user.login === login);
        if (!user) {
            throw new common_1.UnauthorizedException("Неверный логин или пароль");
        }
        if (user.password === password) {
            return user;
        }
        else {
            throw new common_1.UnauthorizedException("Неверный логин или пароль");
        }
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)()
], AuthService);
//# sourceMappingURL=auth.service.js.map