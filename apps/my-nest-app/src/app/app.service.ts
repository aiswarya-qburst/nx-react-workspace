import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getFirstData(): { message: string } {
    return { message: 'Hello First!' };
  }

  getSecondData(): { message: string } {
    return { message: 'Hello Second!' };
  }
}
