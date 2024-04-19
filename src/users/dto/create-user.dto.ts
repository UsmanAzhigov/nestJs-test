import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    example: 'test@test.com',
  })
  email: string;
  @ApiProperty({
    example: 'test',
  })
  fullname: string;
  @ApiProperty({
    example: 'password',
  })
  password: string;
}
