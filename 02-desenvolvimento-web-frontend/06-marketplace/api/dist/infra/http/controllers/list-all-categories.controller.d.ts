import { z } from 'nestjs-zod/z';
import { ListAllCategoriesUseCase } from '@domain/marketplace/application/use-cases/list-all-categories.use-case';
declare const ListAllCategoriesResponse_base: import("nestjs-zod").ZodDto<{
    categories: {
        title: string;
        id: string;
        slug: string;
    }[];
}, z.ZodObjectDef<{
    categories: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        title: z.ZodString;
        slug: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        title: string;
        id: string;
        slug: string;
    }, {
        title: string;
        id: string;
        slug: string;
    }>, "many">;
}, "strip", z.ZodTypeAny>, {
    categories: {
        title: string;
        id: string;
        slug: string;
    }[];
}>;
declare class ListAllCategoriesResponse extends ListAllCategoriesResponse_base {
}
export declare class ListAllCategoriesController {
    private listAllCategories;
    constructor(listAllCategories: ListAllCategoriesUseCase);
    handle(): Promise<ListAllCategoriesResponse>;
}
export {};
