import { Injectable, UnauthorizedException } from "@nestjs/common";

@Injectable()
export class AuthService {
  private users: { login: string; password: string }[] = [
    {
      login: "test@test.local",
      password: "testPwd!23",
    },
    {
      login: "ivan@test.local",
      password: "qwqrty1234",
    },
  ];

  public login(login: string, password: string) {
    const user = this.users.find((user) => user.login === login);

    if (!user) {
      throw new UnauthorizedException("Неверный логин или пароль");
    }

    if (user.password === password) {
      return user;
    } else {
      throw new UnauthorizedException("Неверный логин или пароль");
    }
  }
}