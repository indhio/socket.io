import { Logger } from '@nestjs/common';
import { MessageBody, SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server } from 'http';

@WebSocketGateway()
export class EventsGateway {

    @WebSocketServer()
    server: Server;

    logger = new Logger('EventsGateway');

    // @SubscribeMessage('messages')
    // onEventMessages(@MessageBody() text: string) {
    //     this.logger.log('message ' + JSON.stringify(text));
    //     // this.server.emit('event_logout_' + idUser, obj);
    // }

    @SubscribeMessage('new_message')
    onEventNewMessage(@MessageBody() data: any) {
        this.logger.log('message ' + JSON.stringify(data));
        this.server.emit('messages', data.text);
    }

}