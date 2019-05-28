import { Injectable } from '@nestjs/common';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { Book } from '../books/book.entity';
import { User } from '../users/user.entity';

@Injectable()
export class ConfigService implements TypeOrmOptionsFactory {
  private readonly config: { [key: string]: string | number };
  private readonly environment: string;

  constructor(env: string = process.env.NODE_ENV || 'production') {
    this.environment = env;
    this.config = {};
  }

  isDev(): boolean {
    return this.environment === 'development';
  }

  isProd(): boolean {
    return this.environment === 'production';
  }

  env(): string {
    return this.environment;
  }

  get(key: string): string | number {
    if (key in this.config) {
      return this.config[key];
    }
    if (key in process.env) {
      return process.env[key];
    }
    return undefined;
  }

  createTypeOrmOptions(): TypeOrmModuleOptions {
    const regexIsOn: RegExp = /(true|on|1)/gi;

    let useSSL: boolean = false;
    if (this.get('POSTGRES_SSL')) {
      useSSL = regexIsOn.test(this.get('POSTGRES_SSL') as string);
    } else {
      useSSL = this.isProd();
    }

    let syncSchema: boolean = false;
    if (this.get('POSTGRES_SYNC_SCHEMA')) {
      syncSchema = regexIsOn.test(this.get('POSTGRES_SYNC_SCHEMA') as string);
    } else {
      syncSchema = this.isDev();
    }

    return {
      type: 'postgres',
      host: this.get('POSTGRES_HOST') as string || 'localhost',
      port: this.get('POSTGRES_PORT') as number || 5432,
      username: this.get('POSTGRES_USER') as string || 'postgres',
      password: this.get('POSTGRES_PASSWORD') as string || '',
      database: this.get('POSTGRES_DB') as string || 'test',
      // Note: glob pattern *.ts will not work with Hot Module Reloading:
      // https://github.com/nestjs/nest/issues/711
      // https://github.com/nestjs/nest/issues/1018#issuecomment-417647077
      // Possible solution for dev: https://github.com/nestjs/nest/issues/755#issuecomment-394073763
      // entities: [__dirname + '/../**/*.entity{.ts,.js}'],
      entities: [Book, User],
      // Reuse the same connection between rebuilds (for HMR):
      keepConnectionAlive: this.isDev(),
      synchronize: syncSchema,
      ssl: useSSL,
      logging: ['error', 'migration', 'warn'],
    };
  }
}
