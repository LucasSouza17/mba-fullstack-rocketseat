import { z } from 'nestjs-zod/z';
import { RegisterSellerUseCase } from '@domain/marketplace/application/use-cases/register-seller.use-case';
import { EnvService } from '@infra/env/env.service';
declare const CreateSellerBody_base: import("nestjs-zod").ZodDto<{
    name: string;
    email: string;
    phone: string;
    password: string;
    passwordConfirmation: string;
    avatarId?: string | undefined;
}, z.ZodEffectsDef<z.ZodObject<{
    name: z.ZodString;
    phone: z.ZodString;
    email: z.ZodString;
    avatarId: z.ZodEffects<z.ZodNullable<z.ZodOptional<z.ZodString>>, string | undefined, string | null | undefined>;
    password: z.ZodString;
    passwordConfirmation: z.ZodString;
}, "strip", z.ZodTypeAny, {
    name: string;
    email: string;
    phone: string;
    password: string;
    passwordConfirmation: string;
    avatarId?: string | undefined;
}, {
    name: string;
    email: string;
    phone: string;
    password: string;
    passwordConfirmation: string;
    avatarId?: string | null | undefined;
}>>, {
    name: string;
    email: string;
    phone: string;
    password: string;
    passwordConfirmation: string;
    avatarId?: string | null | undefined;
}>;
declare class CreateSellerBody extends CreateSellerBody_base {
}
declare const CreateSellerResponse_base: import("nestjs-zod").ZodDto<{
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
declare class CreateSellerResponse extends CreateSellerResponse_base {
}
export declare class RegisterSellerController {
    private registerSeller;
    private envService;
    constructor(registerSeller: RegisterSellerUseCase, envService: EnvService);
    handle(body: CreateSellerBody): Promise<CreateSellerResponse>;
}
export {};
