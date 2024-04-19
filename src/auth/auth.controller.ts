import { ApiBody, ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import {
  Body,
  Controller,
  Patch,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';

@Controller('auth')
@ApiTags('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(AuthGuard('local'))
  @Post('login')
  @ApiBody({ type: CreateUserDto })
  async login(@Request() req) {
    try {
      return this.authService.login(req.user);
    } catch (error) {
      throw new Error(error);
    }
  }

  @Post('register')
  register(@Body() dto: CreateUserDto) {
    try {
      return this.authService.register(dto);
    } catch (error) {
      throw new Error(error);
    }
  }

  @Post('code-send')
  sendSms() {
    try {
      return this.authService.sendSms();
    } catch (error) {
      throw new Error(error);
    }
  }

  @Patch('reset-password')
  resetPassword(@Body() dto: CreateUserDto) {
    try {
      return this.authService.resetPassword(dto.email, dto.password);
    } catch (error) {
      throw new Error(error);
    }
  }
}
