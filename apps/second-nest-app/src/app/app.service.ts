import { Injectable } from '@nestjs/common';

import { add } from '@nx-react-workspace/utils';

@Injectable()
export class AppService {
  getData(): { message: string } {
    return { message: add('Hello second nest API') };
  }
}
