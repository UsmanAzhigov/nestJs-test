import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  UseGuards,
} from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiParam,
  ApiBearerAuth,
} from '@nestjs/swagger';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';
import { UserId } from 'src/decorators/user-id.decorator';

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

  @Get('/me')
  @UseGuards(JwtAuthGuard)
  getMe(@UserId() id: number) {
    return this.usersService.findById(id);
  }
}
