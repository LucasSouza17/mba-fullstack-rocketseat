import { ConfigService } from '@nestjs/config';
import { Env } from '@infra/env/schema';
export declare class EnvService {
    private configService;
    constructor(configService: ConfigService<Env, true>);
    get<T extends keyof Env>(key: T): import("@nestjs/config").PathValue<{
        DATABASE_URL: string;
        JWT_PRIVATE_KEY: string;
        JWT_PUBLIC_KEY: string;
        ATTACHMENTS_BASE_URL: string;
        PORT: number;
    }, T>;
}
