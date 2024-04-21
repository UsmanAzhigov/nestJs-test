import { ApiTags, ApiOperation, ApiParam } from '@nestjs/swagger';
import { FileService } from './file.service';
import { CreateFileDto } from './dto/create-file.dto';
import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { FileEntity } from './entities/file.entity';

@Controller('file')
@ApiTags('file')
export class FileController {
  constructor(private readonly fileService: FileService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new file' })
  async create(@Body() createFileDto: CreateFileDto): Promise<FileEntity> {
    return await this.fileService.create(createFileDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all files' })
  async findAll(): Promise<FileEntity[]> {
    return await this.fileService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a file by ID' })
  @ApiParam({ name: 'id', description: 'File ID' })
  async findOne(@Param('id') id: string): Promise<FileEntity> {
    return await this.fileService.findOne(+id);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a file by ID' })
  @ApiParam({ name: 'id', description: 'File ID' })
  async remove(@Param('id') id: string): Promise<void> {
    await this.fileService.remove(+id);
  }
}
