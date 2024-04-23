import { UsersService } from 'src/users/users.service';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { ForbiddenException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from './dto/login-user.dto';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}
  sms = '1111';

  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.usersService.findByEmail(email);
    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async register(dto: CreateUserDto) {
    try {
      const userData = await this.usersService.create(dto);
      return {
        token: this.jwtService.sign({ id: userData.id }),
      };
    } catch (error) {
      console.log(error);

      throw new ForbiddenException(error);
    }
  }

  async login(user: LoginDto) {
    return {
      token: this.jwtService.sign({ id: user.id }, { secret: 'test123' }),
    };
  }

  async sendSms() {
    return this.sms;
  }

  async resetPassword(email: string, newPassword: string): Promise<void> {
    try {
      const user = await this.usersService.findByEmail(email);
      user.password = newPassword;
      await this.usersService.update(user.id, user);
    } catch (error) {
      console.log(error);
      throw new ForbiddenException(error);
    }
  }
}
