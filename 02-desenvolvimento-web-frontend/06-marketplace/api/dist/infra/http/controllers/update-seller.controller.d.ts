import { z } from 'nestjs-zod/z';
import { UpdateSellerUseCase } from '@domain/marketplace/application/use-cases/update-seller.use-case';
import { EnvService } from '@infra/env/env.service';
import { UserPayload } from '@infra/http/auth/jwt.strategy';
declare const UpdateSellerBody_base: import("nestjs-zod").ZodDto<{
    name: string;
    email: string;
    phone: string;
    password?: string | undefined;
    avatarId?: string | undefined;
    newPassword?: string | undefined;
}, z.ZodEffectsDef<z.ZodObject<{
    name: z.ZodString;
    phone: z.ZodString;
    email: z.ZodString;
    avatarId: z.ZodOptional<z.ZodString>;
    password: z.ZodOptional<z.ZodString>;
    newPassword: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    name: string;
    email: string;
    phone: string;
    password?: string | undefined;
    avatarId?: string | undefined;
    newPassword?: string | undefined;
}, {
    name: string;
    email: string;
    phone: string;
    password?: string | undefined;
    avatarId?: string | undefined;
    newPassword?: string | undefined;
}>>, {
    name: string;
    email: string;
    phone: string;
    password?: string | undefined;
    avatarId?: string | undefined;
    newPassword?: string | undefined;
}>;
declare class UpdateSellerBody extends UpdateSellerBody_base {
}
declare const UpdateSellerResponse_base: import("nestjs-zod").ZodDto<{
    seller: {
        avatar: {
            id: string;
            url: string;
        } | null;
        name: string;
        id: string;
        email: string;
        phone: string;
    };
}, z.ZodObjectDef<{
    seller: z.ZodObject<{
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
}, "strip", z.ZodTypeAny>, {
    seller: {
        avatar: {
            id: string;
            url: string;
        } | null;
        name: string;
        id: string;
        email: string;
        phone: string;
    };
}>;
declare class UpdateSellerResponse extends UpdateSellerResponse_base {
}
export declare class UpdateSellerController {
    private updateSeller;
    private envService;
    constructor(updateSeller: UpdateSellerUseCase, envService: EnvService);
    handle(user: UserPayload, body: UpdateSellerBody): Promise<UpdateSellerResponse>;
}
export {};
