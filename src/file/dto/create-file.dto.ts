// create-file.dto.ts
import { ApiProperty } from '@nestjs/swagger';

export class CreateFileDto {
  @ApiProperty({
    example: 'name',
  })
  name: string;

  @ApiProperty({
    example: 'path',
  })
  path: string;

  @ApiProperty({
    example: 1,
  })
  user_id: number;
}
