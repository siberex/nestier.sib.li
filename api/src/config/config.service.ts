import { Injectable } from '@nestjs/common';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { isEnabled, isDev, isProd } from './env.service';
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
    const useSSL = isEnabled('POSTGRES_SSL') || isProd();
    const syncSchema = isEnabled('POSTGRES_SYNC_SCHEMA') || isDev();

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
      keepConnectionAlive: isDev(),
      synchronize: syncSchema,
      ssl: useSSL,
      logging: ['error', 'migration', 'warn'],
    };
  }
}
