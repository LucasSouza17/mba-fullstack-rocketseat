import { z } from 'nestjs-zod/z';
import { User } from '@domain/marketplace/enterprise/entities/user/user';
import { EnvService } from '@infra/env/env.service';
export declare class UserPresenter {
    static zod: z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
        phone: z.ZodString;
        email: z.ZodString;
        avatar: z.ZodNullable<z.ZodObject<{
            id: z.ZodString;
            url: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            id: string;
            url: string;
        }, {
            id: string;
            url: string;
        }>>;
    }, "strip", z.ZodTypeAny, {
        avatar: {
            id: string;
            url: string;
        } | null;
        name: string;
        id: string;
        email: string;
        phone: string;
    }, {
        avatar: {
            id: string;
            url: string;
        } | null;
        name: string;
        id: string;
        email: string;
        phone: string;
    }>;
    static toHTTP(envService: EnvService, seller: User): {
        id: string;
        name: string;
        phone: string;
        email: string;
        avatar: {
            id: string;
            url: string;
        } | null;
    };
}
