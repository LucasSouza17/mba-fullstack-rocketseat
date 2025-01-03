import { AsyncMaybe } from '@core/logic/maybe';
import { FindManyByOwner, ProductsRepository, Count, FindMany } from '@domain/marketplace/application/repositories/products.repository';
import { Product } from '@domain/marketplace/enterprise/entities/product';
import { PrismaService } from '@infra/database/prisma/prisma.service';
export declare class PrismaProductsRepository implements ProductsRepository {
    private prisma;
    constructor(prisma: PrismaService);
    count(params: Count): Promise<number>;
    findManyByOwner(params: FindManyByOwner): Promise<Product[]>;
    findMany(params: FindMany): Promise<Product[]>;
    findById(id: string): AsyncMaybe<Product>;
    create(product: Product): Promise<Product>;
    save(product: Product): Promise<Product>;
}
