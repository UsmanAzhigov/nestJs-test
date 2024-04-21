// file.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateFileDto } from './dto/create-file.dto';
import { FileEntity } from './entities/file.entity';

@Injectable()
export class FileService {
  constructor(
    @InjectRepository(FileEntity)
    private repository: Repository<FileEntity>,
  ) {}

  async create(dto: CreateFileDto): Promise<FileEntity> {
    const file = this.repository.create(dto);
    return await this.repository.save(file);
  }

  async findAll(): Promise<FileEntity[]> {
    return await this.repository.find();
  }

  async findOne(id: number): Promise<FileEntity> {
    return await this.repository.findOneBy({ id });
  }

  async remove(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}
