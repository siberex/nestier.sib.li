import { Injectable } from '@nestjs/common';

@Injectable()
export class ConfigService {
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
}
