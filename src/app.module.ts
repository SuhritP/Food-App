import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MulterModule } from '@nestjs/platform-express';
import { ServeStaticModule } from '@nestjs/serve-static';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { FinancesModule } from './finances/finances.module';
import { RequestFoodsModule } from './request-foods/request-foods.module';
import { DonateFoodsModule } from './donate-foods/donate-foods.module';
import { AuthModule } from './auth/auth.module';
import { join } from 'path';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { LoggingInterceptor } from '@algoan/nestjs-logging-interceptor';
import { TransformInterceptor } from './transform.interceptor';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
      exclude: ['/api*']
    }),
    MongooseModule.forRoot(
      'mongodb+srv://admin:qWyWhaqcQvnHWR0e@admin.m2uhr.mongodb.net/nolo?retryWrites=true&w=majority'
    ),
    // MongooseModule.forRoot(''),
    /* MulterModule.register({
      dest: './upload',
    }), */

    
    UsersModule,
    FinancesModule,
    RequestFoodsModule,
    DonateFoodsModule,
    AuthModule
  ],
  controllers: [AppController],
  providers: [
    AppService,
    /* {
      provide: APP_INTERCEPTOR,
      useClass: LoggingInterceptor,
    }, */
    {
      provide: APP_INTERCEPTOR,
      useClass: TransformInterceptor,
    }
  ],
})
export class AppModule {}
