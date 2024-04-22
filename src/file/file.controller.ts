import {
  ApiTags,
  ApiOperation,
  ApiParam,
  ApiConsumes,
  ApiBody,
} from '@nestjs/swagger';
import { FileService } from './file.service';
import {
  Controller,
  Get,
  Post,
  Param,
  Delete,
  UploadedFile,
  ParseFilePipe,
  MaxFileSizeValidator,
  UseInterceptors,
} from '@nestjs/common';
import { FileEntity } from './entities/file.entity';
import { FileInterceptor } from '@nestjs/platform-express';
import { fileStorage } from './storage';

@Controller('file')
@ApiTags('file')
export class FileController {
  constructor(private readonly fileService: FileService) {}

  @Post()
  @UseInterceptors(
    FileInterceptor('file', {
      storage: fileStorage,
    }),
  )
  @ApiOperation({ summary: 'Create a new file' })
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        file: {
          type: 'string',
          format: 'binary',
        },
      },
    },
  })
  async create(
    @UploadedFile(
      new ParseFilePipe({
        validators: [new MaxFileSizeValidator({ maxSize: 10485760 })],
      }),
    )
    file: Express.Multer.File,
  ) {
    return file;
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
