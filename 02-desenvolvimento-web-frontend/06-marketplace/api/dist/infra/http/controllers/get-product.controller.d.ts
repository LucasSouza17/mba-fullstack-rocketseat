import { z } from 'nestjs-zod/z';
import { GetProductUseCase } from '@domain/marketplace/application/use-cases/get-product.use-case';
import { EnvService } from '@infra/env/env.service';
declare const GetProductResponse_base: import("nestjs-zod").ZodDto<{
    product: {
        status: import("../../../domain/marketplace/enterprise/entities/product").ProductStatus;
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
    };
}, z.ZodObjectDef<{
    product: z.ZodObject<{
        id: z.ZodString;
        title: z.ZodString;
        description: z.ZodString;
        priceInCents: z.ZodNumber;
        status: z.ZodNativeEnum<typeof import("../../../domain/marketplace/enterprise/entities/product").ProductStatus>;
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
        status: import("../../../domain/marketplace/enterprise/entities/product").ProductStatus;
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
        status: import("../../../domain/marketplace/enterprise/entities/product").ProductStatus;
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
}, "strip", z.ZodTypeAny>, {
    product: {
        status: import("../../../domain/marketplace/enterprise/entities/product").ProductStatus;
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
    };
}>;
declare class GetProductResponse extends GetProductResponse_base {
}
export declare class GetProductController {
    private getProduct;
    private envService;
    constructor(getProduct: GetProductUseCase, envService: EnvService);
    handle(id: string): Promise<GetProductResponse>;
}
export {};
