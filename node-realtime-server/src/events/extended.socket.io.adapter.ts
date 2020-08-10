import { Logger } from '@nestjs/common';
import { IoAdapter } from '@nestjs/platform-socket.io';
import * as http from 'http';
import * as https from 'https';
import * as io from 'socket.io';
export class ExtendedSocketIoAdapter extends IoAdapter {

    logger = new Logger('ExtendedSocketIoAdapter');

    protected ioServer;
    constructor(protected server: http.Server | https.Server) {
        super();
        this.logger.log('Websocket gateway is ready')
        // console.log(JSON.stringify(server));
        this.ioServer = io(server)
    }

    create(port: number) {
        this.logger.log('websocket gateway port argument is ignored by ExtendedSocketIoAdapter, use the same port of http instead')
        return this.ioServer
    }
}