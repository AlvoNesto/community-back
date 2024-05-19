import { Module } from '@nestjs/common';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';

@Module({
  imports: [],
  controllers: [AuthController, UsersController],
  providers: [AuthService, UsersService],
})
export class AppModule {}
