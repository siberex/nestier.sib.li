import { Injectable } from '@nestjs/common';
import { TypeOrmOptionsFactory, TypeOrmModuleOptions } from '@nestjs/typeorm';

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
        return {
            type: 'postgres',
            host: this.get('POSTGRES_HOST') as string || 'localhost',
            port: this.get('POSTGRES_PORT') as number || 5432,
            username: this.get('POSTGRES_USER') as string || 'postgres',
            password: this.get('POSTGRES_PASSWORD') as string || '',
            database: this.get('POSTGRES_DB') as string || 'test',
            entities: [__dirname + '/../**/*.entity{.ts,.js}'],
            synchronize: this.isDev(),
            ssl: this.isProd(),
        };
    }
}
