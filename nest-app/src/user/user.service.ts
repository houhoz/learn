import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Logs } from './../logs/logs.entity';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    @InjectRepository(Logs)
    private logsRepository: Repository<Logs>,
  ) {}
  findAll() {
    return this.userRepository.find();
  }

  find(username: string) {
    return this.userRepository.findOne({ where: { username } });
  }

  findOne(id: number) {
    return this.userRepository.findOne({ where: { id } });
  }

  async create(user: User) {
    const userTmp = await this.userRepository.create(user);
    return this.userRepository.save(userTmp);
  }

  async update(id: number, user: Partial<User>) {
    await this.userRepository.update(id, user);
    return this.userRepository.findOne({ where: { id } });
  }

  async remove(id: number) {
    await this.userRepository.delete(id);
    return {
      msg: '删除成功',
    };
  }

  findProfile(id: number) {
    return this.userRepository.findOne({
      where: { id },
      relations: {
        profile: true,
      },
    });
  }

  async findUserLogs(id: number) {
    const user = await this.findOne(id);
    return this.logsRepository.find({
      where: {
        user,
      },
      // relations: {
      //   user: true,
      // },
    });
  }

  findLogsByGroup(id: number) {
    // SELECT logs.result as result, COUNT(logs.result) as count from logs, user WHERE user.id = logs.userId AND user.id = 2 GROUP BY logs.result
    return (
      this.logsRepository
        .createQueryBuilder('logs')
        .select('logs.result', 'result')
        .addSelect('COUNT("logs.result")', 'count')
        .leftJoinAndSelect('logs.user', 'user')
        .where('user.id = :id', { id })
        .groupBy('logs.result')
        // .orderBy('count', 'DESC')
        .orderBy('result', 'DESC')
        .addOrderBy('count', 'DESC')
        .offset(1)
        .limit(2)
        .getRawMany()
    );
  }
}
