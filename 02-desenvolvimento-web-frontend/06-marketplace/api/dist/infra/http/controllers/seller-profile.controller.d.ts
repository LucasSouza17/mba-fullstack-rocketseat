import { z } from 'nestjs-zod/z';
import { SellerProfileUseCase } from '@domain/marketplace/application/use-cases/seller-profile.use-case';
import { EnvService } from '@infra/env/env.service';
import { UserPayload } from '@infra/http/auth/jwt.strategy';
declare const SellerProfileResponse_base: import("nestjs-zod").ZodDto<{
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
declare class SellerProfileResponse extends SellerProfileResponse_base {
}
export declare class SellerProfileController {
    private sellerProfile;
    private env;
    constructor(sellerProfile: SellerProfileUseCase, env: EnvService);
    handle(user: UserPayload): Promise<SellerProfileResponse>;
}
export {};
