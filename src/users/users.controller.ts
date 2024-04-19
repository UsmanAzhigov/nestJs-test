import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
@ApiTags('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    try {
      return await this.usersService.create(createUserDto);
    } catch (error) {
      throw new Error(error);
    }
  }

  @Get()
  async findAll() {
    try {
      return await this.usersService.findAll();
    } catch (error) {
      throw new Error(error);
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    try {
      return await this.usersService.findById(id);
    } catch (error) {
      throw new Error(error);
    }
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() dto: CreateUserDto) {
    try {
      return await this.usersService.update(id, dto);
    } catch (error) {
      throw new Error(error);
    }
  }

  @Delete(':id')
  async delete(@Param('id') id: number) {
    try {
      return await this.usersService.delete(id);
    } catch (error) {
      throw new Error(error);
    }
  }
}
