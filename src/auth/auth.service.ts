import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  login(): string {
    return 'Successful login!';
  }
}
