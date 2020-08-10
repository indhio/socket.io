import { Injectable } from '@nestjs/common';
import { WebSocketServer } from '@nestjs/websockets';
import { Server } from 'http';

@Injectable()
export class MessageService {

  @WebSocketServer() server: Server;

  public list: Array<string> = new Array<string>();

  constructor() {
    this.list = new Array<string>();
  }

  async findAll(): Promise<any> {
    return new Promise((resolve, reject) => {
      resolve(this.list);
    });
  }

  async create(text: string): Promise<any> {
    return new Promise((resolve, reject) => {
      resolve(text);
    });
  }

}
