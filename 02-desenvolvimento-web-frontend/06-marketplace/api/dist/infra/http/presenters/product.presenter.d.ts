import { z } from 'nestjs-zod/z';
import { Product, ProductStatus } from '@domain/marketplace/enterprise/entities/product';
import { EnvService } from '@infra/env/env.service';
export declare class ProductPresenter {
    static zod: z.ZodObject<{
        id: z.ZodString;
        title: z.ZodString;
        description: z.ZodString;
        priceInCents: z.ZodNumber;
        status: z.ZodNativeEnum<typeof ProductStatus>;
        owner: z.ZodObject<{
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
        category: z.ZodObject<{
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
        attachments: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            url: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            id: string;
            url: string;
        }, {
            id: string;
            url: string;
        }>, "many">;
    }, "strip", z.ZodTypeAny, {
        status: ProductStatus;
        title: string;
        description: string;
        priceInCents: number;
        owner: {
            avatar: {
                id: string;
                url: string;
            } | null;
            name: string;
            id: string;
            email: string;
            phone: string;
        };
        category: {
            title: string;
            id: string;
            slug: string;
        };
        attachments: {
            id: string;
            url: string;
        }[];
        id: string;
    }, {
        status: ProductStatus;
        title: string;
        description: string;
        priceInCents: number;
        owner: {
            avatar: {
                id: string;
                url: string;
            } | null;
            name: string;
            id: string;
            email: string;
            phone: string;
        };
        category: {
            title: string;
            id: string;
            slug: string;
        };
        attachments: {
            id: string;
            url: string;
        }[];
        id: string;
    }>;
    static toHTTP(envService: EnvService, product: Product): {
        id: string;
        title: string;
        description: string;
        priceInCents: number;
        status: ProductStatus;
        owner: {
            id: string;
            name: string;
            phone: string;
            email: string;
            avatar: {
                id: string;
                url: string;
            } | null;
        };
        category: {
            id: string;
            title: string;
            slug: string;
        };
        attachments: {
            id: string;
            url: string;
        }[];
    };
}
