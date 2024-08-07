import { Controller, Get } from '@nestjs/common';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/first')
  getFirstData() {
    return this.appService.getFirstData();
  }

  @Get('/second')
  getSecondData() {
    return this.appService.getSecondData();
  }
}
