import { z } from 'nestjs-zod/z';
import { CountSellerSoldProductsUseCase } from '@domain/marketplace/application/use-cases/count-seller-sold-products.use-case';
import { UserPayload } from '@infra/http/auth/jwt.strategy';
import { AmountResponse } from '@infra/http/controllers/dto/amount.response';
declare const QuerySchema_base: import("nestjs-zod").ZodDto<{
    from: Date;
}, z.ZodObjectDef<{
    from: z.ZodDefault<z.ZodOptional<z.ZodDate>>;
}, "strip", z.ZodTypeAny>, {
    from?: Date | undefined;
}>;
declare class QuerySchema extends QuerySchema_base {
}
export declare class CountSellerSoldProductsController {
    private countSellerSoldProducts;
    constructor(countSellerSoldProducts: CountSellerSoldProductsUseCase);
    handle(user: UserPayload, query: QuerySchema): Promise<AmountResponse>;
}
export {};
