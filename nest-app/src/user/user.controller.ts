import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {
    // private userService: UserService 语法糖 相当于
    // this.userService = UserService
  }

  @Get()
  getUsers(): any {
    return this.userService.getUsers();
  }
}
