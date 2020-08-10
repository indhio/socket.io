import { Body, Controller, Get, HttpStatus, Post, Res } from '@nestjs/common';
import { MessageService } from './message.service';

@Controller('api/message')
export class MessageController {

  constructor(private readonly service: MessageService) {
  }

  @Get('/list')
  async findAll(): Promise<any> {
    return this.service.findAll();
  }

  @Post('/create')
  async create(@Res() res, @Body() obj: any) {
    this.service.create(obj.text).then((result: any) => {
      res.status(HttpStatus.OK).send(result);
    }).catch(err => {
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(err);
    });
  }

}
