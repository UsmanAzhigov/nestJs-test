// file.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FileEntity } from './entities/file.entity';

@Injectable()
export class FileService {
  constructor(
    @InjectRepository(FileEntity)
    private repository: Repository<FileEntity>,
  ) {}

  create(file: Express.Multer.File, userId: number) {
    return this.repository.save({
      name: file.originalname,
      path: file.path,
      user: {
        id: userId,
      },
    });
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
