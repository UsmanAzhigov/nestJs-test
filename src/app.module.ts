import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { FileModule } from './file/file.module';
import { AppController } from './app.controller';
import { UsersModule } from './users/users.module';
import { FileEntity } from './file/entities/file.entity';
import { UsersEntity } from './users/entities/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'flora.db.elephantsql.com',
      port: 5432,
      username: 'fcefwtna',
      password: '01-Fl82p3ZNDGZbjrZDLyJXfngy9krSO',
      database: 'fcefwtna',
      entities: [UsersEntity, FileEntity],
      synchronize: true,
    }),
    UsersModule,
    AuthModule,
    FileModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
