import { Body, Controller, Post, HttpCode, HttpStatus } from '@nestjs/common';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
import { AuthService } from './auth.service';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller('auth')
@ApiTags('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Аутентификация пользователя' })
  @ApiResponse({ 
    status: 200, 
    description: 'Успешная аутентификация'
  })
  @ApiResponse({ 
    status: 401, 
    description: 'Неверные учетные данные'
  })
  public login(@Body() dto: LoginDto) {
    console.log('Call login endpoint', dto);
    const user = this.authService.login(dto.login, dto.password);
    return { 
      message: 'Login successful',
      user: user
    };
  }

  @Post('register')
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ 
    summary: 'Регистрация нового пользователя',
    description: 'Создает нового пользователя с указанными данными'
  })
  @ApiResponse({ 
    status: 201, 
    description: 'Пользователь успешно зарегистрирован'
  })
  @ApiResponse({ 
    status: 409, 
    description: 'Пользователь с таким email уже существует'
  })
  @ApiResponse({ 
    status: 400, 
    description: 'Ошибка валидации данных'
  })
  public register(@Body() dto: RegisterDto) {
    console.log('Call register endpoint', dto);
    const result = this.authService.register(
      dto.email, 
      dto.password, 
      dto.firstName, 
      dto.lastName, 
      dto.gender, 
      dto.age
    );
    return result;
  }
}