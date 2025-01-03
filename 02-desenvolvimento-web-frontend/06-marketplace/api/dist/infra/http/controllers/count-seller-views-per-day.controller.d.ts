import { z } from 'nestjs-zod/z';
import { CountSellerViewsPerDayUseCase } from '@domain/marketplace/application/use-cases/count-seller-views-per-day.use-case';
import { UserPayload } from '@infra/http/auth/jwt.strategy';
declare const QuerySchema_base: import("nestjs-zod").ZodDto<{
    from: Date;
}, z.ZodObjectDef<{
    from: z.ZodDefault<z.ZodOptional<z.ZodDate>>;
}, "strip", z.ZodTypeAny>, {
    from?: Date | undefined;
}>;
declare class QuerySchema extends QuerySchema_base {
}
declare const ViewsPerDayResponse_base: import("nestjs-zod").ZodDto<{
    viewsPerDay: {
        date: Date;
        amount: number;
    }[];
}, z.ZodObjectDef<{
    viewsPerDay: z.ZodArray<z.ZodObject<{
        date: z.ZodDate;
        amount: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        date: Date;
        amount: number;
    }, {
        date: Date;
        amount: number;
    }>, "many">;
}, "strip", z.ZodTypeAny>, {
    viewsPerDay: {
        date: Date;
        amount: number;
    }[];
}>;
declare class ViewsPerDayResponse extends ViewsPerDayResponse_base {
}
export declare class CountSellerViewsPerDayController {
    private countSellerViewsPerDay;
    constructor(countSellerViewsPerDay: CountSellerViewsPerDayUseCase);
    handle(user: UserPayload, query: QuerySchema): Promise<ViewsPerDayResponse>;
}
export {};
