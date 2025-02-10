import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    const t=process.env.JWT_SECRET
    console.log("t is "+t)
    return t;
  }
}
