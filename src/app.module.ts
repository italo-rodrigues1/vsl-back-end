import { Module } from '@nestjs/common';
import { UserController } from './domain/user/user.controller';
import { UserModule } from './domain/user/user.module';
import { PlacesModule } from './domain/places/places.module';
import { UserService } from './domain/user/user.service';

@Module({
  imports: [UserModule, PlacesModule],
  controllers: [UserController],
  providers: [UserService],
})
export class AppModule {}
