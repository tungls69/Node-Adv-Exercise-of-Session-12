import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // Đặt module này là global để sử dụng trong toàn bộ ứng dụng
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
