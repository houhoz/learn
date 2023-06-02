import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import * as Joi from 'joi';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ConfigEnum } from './enum/config.enum';
import { User } from './user/user.entity';
import { Profile } from './user/profile.entity';
import { Roles } from './roles/roles.entity';
import { Logs } from './logs/logs.entity';

const envFilePath = `.env.${process.env.NODE_ENV || 'development'}`;

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env', envFilePath],
      validationSchema: Joi.object({
        NODE_ENV: Joi.string()
          .valid('development', 'production')
          .default('development'),
        DB_PORT: Joi.number().default(3306),
        DB_HOST: Joi.string().ip(),
        DB_TYPE: Joi.string().required(),
        DB_USERNAME: Joi.string().required(),
        DB_PASSWORD: Joi.string().required(),
        DB_DATABASE: Joi.string().required(),
        DB_SYNC: Joi.boolean().default(false),
      }),
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) =>
        ({
          type: configService.get(ConfigEnum.DB_TYPE),
          host: configService.get(ConfigEnum.DB_HOST),
          port: configService.get(ConfigEnum.DB_PORT),
          username: configService.get(ConfigEnum.DB_USERNAME),
          password: configService.get(ConfigEnum.DB_PASSWORD),
          database: configService.get(ConfigEnum.DB_DATABASE),
          entities: [User, Profile, Roles, Logs],
          // 同步本地的schema与数据库--> 初始化的时候去使用
          synchronize: configService.get(ConfigEnum.DB_SYNC),
          logging: ['error'],
          // logging: true,
        } as TypeOrmModuleOptions),
    }),
    // TypeOrmModule.forRoot({
    //   type: 'mysql',
    //   host: 'localhost',
    //   port: 3306,
    //   username: 'root',
    //   password: 'example',
    //   database: 'testdb',
    //   entities: [],
    //   // 同步本地的schema与数据库--> 初始化的时候去使用
    //   synchronize: true,
    //   logging: ['error'],
    // }),
    UserModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
