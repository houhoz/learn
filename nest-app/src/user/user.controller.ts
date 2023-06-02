import { Controller, Get, Post, Patch, Delete } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { UserService } from './user.service';
import { User } from './user.entity';

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
    return this.userService.findAll();
  }

  @Post()
  addUser(): any {
    // TODO 解析Body参数
    const user = { username: 'test11', password: '123456' } as User;
    return this.userService.create(user);
  }

  @Patch()
  updateUser(): any {
    // TODO 传递参数id
    // TODO 异常处理
    const user = { username: 'newName' } as User;
    return this.userService.update(3, user);
  }

  @Delete()
  deleteUser(): any {
    // TODO 传递参数id
    return this.userService.remove(5);
  }

  @Get('/profile')
  getUserProfile(): any {
    return this.userService.findProfile(1);
  }

  @Get('/logs')
  getUserLogs(): any {
    return this.userService.findUserLogs(1);
  }
}
