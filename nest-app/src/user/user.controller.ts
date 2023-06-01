import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';
import { ConfigService } from '@nestjs/config';
import { ConfigEnum } from './../enum/config.enum';

@Controller('user')
export class UserController {
  constructor(
    private userService: UserService,
    private configService: ConfigService,
  ) {
    // private userService: UserService 语法糖 相当于
    // this.userService = UserService
  }

  @Get()
  getUsers(): any {
    const db = this.configService.get(ConfigEnum.DB);
    console.log('db :>> ', db);
    return this.userService.getUsers();
  }
}
