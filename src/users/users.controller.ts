import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiParam } from '@nestjs/swagger';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
@ApiTags('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new user' })
  async create(@Body() createUserDto: CreateUserDto) {
    try {
      return await this.usersService.create(createUserDto);
    } catch (error) {
      throw new Error(error);
    }
  }

  @Get()
  @ApiOperation({ summary: 'Get all users' })
  async findAll() {
    try {
      return await this.usersService.findAll();
    } catch (error) {
      throw new Error(error);
    }
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a user by ID' })
  @ApiParam({ name: 'id', description: 'User ID' })
  async findOne(@Param('id') id: number) {
    try {
      return await this.usersService.findById(id);
    } catch (error) {
      throw new Error(error);
    }
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update a user by ID' })
  @ApiParam({ name: 'id', description: 'User ID' })
  async update(@Param('id') id: number, @Body() dto: CreateUserDto) {
    try {
      return await this.usersService.update(id, dto);
    } catch (error) {
      throw new Error(error);
    }
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a user by ID' })
  @ApiParam({ name: 'id', description: 'User ID' })
  async delete(@Param('id') id: number) {
    try {
      return await this.usersService.delete(id);
    } catch (error) {
      throw new Error(error);
    }
  }

  @Put(':id/phone')
  @ApiOperation({ summary: 'Update a user phone by ID' })
  @ApiParam({ name: 'id', description: 'User ID' })
  async updatePhone(@Param('id') id: number, @Body() phone: string) {
    try {
      return await this.usersService.updatePhone(id, phone);
    } catch (error) {
      throw new Error(error);
    }
  }

  @Put(':id/avatar')
  @ApiOperation({ summary: 'Update a user avatar by ID' })
  @ApiParam({ name: 'id', description: 'User ID' })
  async updateAvatar(@Param('id') id: number, @Body() avatar: string) {
    try {
      return await this.usersService.updateAvatar(id, avatar);
    } catch (error) {
      throw new Error(error);
    }
  }
}
