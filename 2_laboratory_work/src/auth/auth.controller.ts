import { Body, Controller, Post } from '@nestjs/common';
import { LoginDto } from './dto/login.dto';
import { AuthService } from './auth.service';
import { ApiTags } from '@nestjs/swagger';

@Controller('auth')
@ApiTags('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  public login(@Body() dto: LoginDto) {
    console.log('Call login endpoint', dto);
    return this.authService.login(dto.login, dto.password);
  }

  @Post('register')
  public register(@Body() dto: any) {
    console.log('Call register endpoint', dto);
    return { message: 'ok' };
  }
}