import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { UserController } from './controllers/user/user.controller';
import { LocationServService } from './location-serv/location-serv.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import Profile from './Entities/Profile.entity';

@Module({
  controllers: [UserController],
  imports: [
    HttpModule.register({
      timeout: 5000,
      maxRedirects: 5,
    }),
    TypeOrmModule.forFeature([Profile]),
  ],
  providers: [LocationServService],
})
export class UserModule {}
