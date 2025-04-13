import { Injectable } from '@nestjs/common';

@Injectable()
export class MainService {
  getHealth(): boolean {
    return true;
  }
}
