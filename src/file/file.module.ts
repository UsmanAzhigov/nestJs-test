import { Module } from '@nestjs/common';
import { FileService } from './file.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FileController } from './file.controller';
import { FileEntity } from './entities/file.entity';

@Module({
  imports: [TypeOrmModule.forFeature([FileEntity])],
  controllers: [FileController],
  providers: [FileService],
  exports: [FileService],
})
export class FileModule {}
