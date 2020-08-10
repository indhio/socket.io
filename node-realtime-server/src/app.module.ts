import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EventsModule } from './events/events.module';
import { MessageModule } from './modules/message/message.module';

@Module({
  imports: [
    EventsModule,
    MessageModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
