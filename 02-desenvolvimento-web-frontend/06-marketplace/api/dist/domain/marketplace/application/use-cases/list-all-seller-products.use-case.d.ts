import { Either } from '@core/logic/either';
import { ProductsRepository } from '@domain/marketplace/application/repositories/products.repository';
import { SellersRepository } from '@domain/marketplace/application/repositories/sellers.repository';
import { ResourceNotFoundError } from '@domain/marketplace/application/use-cases/errors/resource-not-found.error';
import { Product } from '@domain/marketplace/enterprise/entities/product';
interface Params {
    sellerId: string;
    search?: string;
    status?: Product['status'];
}
type Result = Either<ResourceNotFoundError, {
    products: Product[];
}>;
export declare class ListAllSellerProductsUseCase {
    private sellersRepository;
    private productsRepository;
    constructor(sellersRepository: SellersRepository, productsRepository: ProductsRepository);
    execute(params: Params): Promise<Result>;
}
export {};
