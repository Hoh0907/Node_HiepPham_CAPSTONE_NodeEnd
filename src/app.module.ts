import { Module } from '@nestjs/common';
import { UsersService } from './users/users.service';
import { UsersModule } from './users/users.module';
import {ConfigModule} from '@nestjs/config'
import { AuthModule } from './auth/auth.module';
import {APP_FILTER} from '@nestjs/core';
import { HttpExceptionFilrer } from './common/exception/httpException.filer';
import { PrismaClientExceptionFilter } from './common/exception/exception.filer';
import { TheaterModule } from './theater/theater.module';
import { MovieModule } from './movie/movie.module';
import { BookingModule } from './booking/booking.module';


@Module({

  imports: [ConfigModule.forRoot({isGlobal:true}),UsersModule, AuthModule, TheaterModule, MovieModule, BookingModule],
  providers: [
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilrer
    },
    {
      provide: APP_FILTER,
      useClass: PrismaClientExceptionFilter
    }
  ]
})
export class AppModule {}
