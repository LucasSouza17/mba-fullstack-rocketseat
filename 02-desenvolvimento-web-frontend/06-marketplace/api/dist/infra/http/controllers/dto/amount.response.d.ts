import { z } from 'nestjs-zod/z';
declare const AmountResponse_base: import("nestjs-zod").ZodDto<{
    amount: number;
}, z.ZodObjectDef<{
    amount: z.ZodNumber;
}, "strip", z.ZodTypeAny>, {
    amount: number;
}>;
export declare class AmountResponse extends AmountResponse_base {
}
export {};
