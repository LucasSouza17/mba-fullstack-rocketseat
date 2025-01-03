import { AsyncMaybe } from '@core/logic/maybe';
import { PaginationParams } from '@core/repositories/pagination-params';
import { Product } from '@domain/marketplace/enterprise/entities/product';
export interface FindManyByOwner {
    ownerId: string;
    search?: string;
    status?: Product['status'];
}
export interface FindMany extends PaginationParams {
    search?: string;
    status?: Product['status'];
}
export interface Metrics {
    sellerId: string;
}
export interface Count {
    sellerId: string;
    from?: Date;
    status?: Product['status'];
}
export declare abstract class ProductsRepository {
    abstract count(params: Count): Promise<number>;
    abstract findManyByOwner(params: FindManyByOwner): Promise<Product[]>;
    abstract findMany(params: FindMany): Promise<Product[]>;
    abstract findById(id: string): AsyncMaybe<Product>;
    abstract create(product: Product): Promise<Product>;
    abstract save(product: Product): Promise<Product>;
}
