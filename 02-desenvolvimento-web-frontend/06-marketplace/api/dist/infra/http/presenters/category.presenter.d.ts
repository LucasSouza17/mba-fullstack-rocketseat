import { z } from 'nestjs-zod/z';
import { Category } from '@domain/marketplace/enterprise/entities/category';
export declare class CategoryPresenter {
    static zod: z.ZodObject<{
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
    }>;
    static toHTTP(category: Category): {
        id: string;
        title: string;
        slug: string;
    };
}
