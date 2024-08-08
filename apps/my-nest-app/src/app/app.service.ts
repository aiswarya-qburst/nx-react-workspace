import { Injectable } from '@nestjs/common';

import { uppercase } from '@nx-react-workspace/utils';

@Injectable()
export class AppService {
  getFirstData(): { message: string } {
    return { message: uppercase('Hello First!') };
  }

  getSecondData(): { message: string } {
    return { message: 'Hello Second!' };
  }
}
