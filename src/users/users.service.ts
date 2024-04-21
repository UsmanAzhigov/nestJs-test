import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersEntity } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UsersEntity)
    private repository: Repository<UsersEntity>,
  ) {}

  async findByEmail(email: string) {
    return this.repository.findOneBy({
      email,
    });
  }

  async findById(id: number) {
    return this.repository.findOneBy({
      id,
    });
  }

  findAll() {
    return this.repository.find();
  }

  create(dto: CreateUserDto) {
    return this.repository.save(dto);
  }

  delete(id: number) {
    return this.repository.delete(id);
  }

  update(id: number, dto: CreateUserDto) {
    return this.repository.update(id, dto);
  }

  updatePhone(id: number, phone: string) {
    return this.repository.update(id, { phone });
  }

  updateAvatar(id: number, avatar: string) {
    return this.repository.update(id, { userAvatar: avatar });
  }
}
