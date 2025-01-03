import { Either } from '@core/logic/either';
import { ProductsRepository } from '@domain/marketplace/application/repositories/products.repository';
import { SellersRepository } from '@domain/marketplace/application/repositories/sellers.repository';
import { ResourceNotFoundError } from '@domain/marketplace/application/use-cases/errors/resource-not-found.error';
interface Params {
    sellerId: string;
    from: Date;
}
type Result = Either<ResourceNotFoundError, {
    amount: number;
}>;
export declare class CountSellerAvailableProductsUseCase {
    private sellersRepository;
    private productsRepository;
    constructor(sellersRepository: SellersRepository, productsRepository: ProductsRepository);
    execute(params: Params): Promise<Result>;
}
export {};
