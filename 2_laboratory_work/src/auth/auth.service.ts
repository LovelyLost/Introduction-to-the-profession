import { Injectable, UnauthorizedException, ConflictException, BadRequestException } from "@nestjs/common";

interface User {
  id: number;
  login: string;
  password: string;
  firstName: string;
  lastName: string;
  gender: string;
  age: number;
  createdAt: Date;
}

@Injectable()
export class AuthService {
  private users: User[] = [
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

  private nextId = 3;

  public login(login: string, password: string) {
    const user = this.users.find((user) => user.login === login);

    if (!user) {
      throw new UnauthorizedException("Неверный логин или пароль");
    }

    if (user.password === password) {
      
      const { password: _, ...userWithoutPassword } = user;
      return userWithoutPassword;
    } else {
      throw new UnauthorizedException("Неверный логин или пароль");
    }
  }

  public register(
    email: string, 
    password: string, 
    firstName: string, 
    lastName: string, 
    gender: string, 
    age: number
  ) {

    const existingUser = this.users.find((user) => user.login === email);
    
    if (existingUser) {
      throw new ConflictException("Пользователь с таким email уже существует");
    }

    if (password.length < 8) {
      throw new BadRequestException("Пароль должен содержать минимум 8 символов");
    }

    const newUser: User = {
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

  public getAllUsers() {
    return this.users.map(user => {
      const { password, ...userWithoutPassword } = user;
      return userWithoutPassword;
    });
  }

  public findUserByEmail(email: string) {
    const user = this.users.find(user => user.login === email);
    if (user) {
      const { password, ...userWithoutPassword } = user;
      return userWithoutPassword;
    }
    return null;
  }
}