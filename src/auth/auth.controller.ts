import { Controller, Request, Post, UseGuards, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt-auth.guard';
import { RegisterUserDto } from './dtos/register-user.dto';
import { LoginUserDto } from './dtos/login-user.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  async login(@Body() loginUser: LoginUserDto) {
    const user = await this.authService.validateUser(loginUser.username, loginUser.password);
    if (!user) {
      return 'Invalid credentials';
    }
    return this.authService.login(user);
  }

  @Post('register')
  async register(@Body() registerUser: RegisterUserDto) {
    try {
      return this.authService.register(registerUser);
    } catch (error) {
      console.error(error);
      return error;
    }
  }

  @UseGuards(JwtAuthGuard)
  @Post('validate')
  validateToken(@Request() req) {
    return req.user;
  }
}
