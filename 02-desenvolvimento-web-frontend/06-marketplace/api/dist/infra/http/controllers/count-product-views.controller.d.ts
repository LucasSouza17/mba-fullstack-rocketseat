import { z } from 'nestjs-zod/z';
import { CountProductViewsUseCase } from '@domain/marketplace/application/use-cases/count-product-views.use-case';
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
export declare class CountProductViewsController {
    private countProductViews;
    constructor(countProductViews: CountProductViewsUseCase);
    handle(productId: string, query: QuerySchema): Promise<AmountResponse>;
}
export {};
