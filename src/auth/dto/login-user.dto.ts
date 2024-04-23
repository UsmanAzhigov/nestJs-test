import { ApiProperty } from '@nestjs/swagger';

export class LoginDto {
  id?: number;
  @ApiProperty({
    example: 'test@test.com',
  })
  email: string;

  @ApiProperty({
    example: 'password',
  })
  password: string;
}
