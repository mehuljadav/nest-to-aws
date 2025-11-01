import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getData(): string {
    return 'Hello World! How are you?';
  }
  getData2(): string {
    return 'Hello World! How are you? ok?';
  }
}
