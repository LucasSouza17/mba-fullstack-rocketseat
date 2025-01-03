import { Response } from 'express';
import { z } from 'nestjs-zod/z';
import { AuthenticateSellerUseCase } from '@domain/marketplace/application/use-cases/authenticate-seller.use-case';
declare const AuthenticateSellerBody_base: import("nestjs-zod").ZodDto<{
    email: string;
    password: string;
}, z.ZodObjectDef<{
    email: z.ZodString;
    password: z.ZodString;
}, "strip", z.ZodTypeAny>, {
    email: string;
    password: string;
}>;
declare class AuthenticateSellerBody extends AuthenticateSellerBody_base {
}
export declare class AuthenticateSellerController {
    private authenticateSeller;
    constructor(authenticateSeller: AuthenticateSellerUseCase);
    handle(body: AuthenticateSellerBody, response: Response): Promise<Response<any, Record<string, any>>>;
}
export {};
