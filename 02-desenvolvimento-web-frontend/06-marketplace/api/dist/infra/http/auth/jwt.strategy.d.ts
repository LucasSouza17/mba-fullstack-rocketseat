import { Strategy } from 'passport-jwt';
import { z } from 'zod';
import { EnvService } from '@infra/env/env.service';
declare const tokenPayloadSchema: z.ZodObject<{
    sub: z.ZodString;
}, "strip", z.ZodTypeAny, {
    sub: string;
}, {
    sub: string;
}>;
export type UserPayload = z.infer<typeof tokenPayloadSchema>;
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    constructor(config: EnvService);
    validate(payload: UserPayload): Promise<{
        sub: string;
    }>;
}
export {};
