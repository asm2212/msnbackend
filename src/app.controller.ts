import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('ff')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('gg')
  getHello(): string {
    return this.appService.getHello();
  }
}
