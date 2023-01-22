// import { Module } from '@nestjs/common';
// import { UsersController } from './users.controller';
// import { JwtModule } from '@nestjs/jwt/dist';
// import {UsersService} from './users.service';
// import { JwtStrategy } from 'src/auth/strategy/jwt.strategy';

// @Module({
//   imports: [JwtModule.register({})],
//   controllers: [UsersController],
//   providers: [UsersService,JwtStrategy]
// })
// export class UsersModule {}
import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { forwardRef } from '@nestjs/common/utils'
import { AuthModule } from 'src/auth/auth.module';
import { JwtService } from '@nestjs/jwt';

@Module({
  imports: [forwardRef(() => AuthModule)],
  controllers: [UsersController],
  providers: [UsersService,JwtService],
  exports: [UsersService]
})
export class UsersModule { }