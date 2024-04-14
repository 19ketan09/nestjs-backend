import { Controller, Get } from '@nestjs/common';
import { of } from 'rxjs';

@Controller('/users')
export class UsersController {
  @Get('/profile')
  getProfile() {
    return of({ hello: 'This is the profile page' });
  }
}
