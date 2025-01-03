import { NotAllowedError } from '@core/errors/common/not-allowed.error';
import { Either } from '@core/logic/either';
import { ProductsRepository } from '@domain/marketplace/application/repositories/products.repository';
import { SellersRepository } from '@domain/marketplace/application/repositories/sellers.repository';
import { ResourceNotFoundError } from '@domain/marketplace/application/use-cases/errors/resource-not-found.error';
import { Product } from '@domain/marketplace/enterprise/entities/product';
interface Params {
    productId: string;
    ownerId: string;
}
type Result = Either<ResourceNotFoundError | NotAllowedError, {
    product: Product;
}>;
export declare class MarkSellAsSoldUseCase {
    private sellersRepository;
    private productsRepository;
    constructor(sellersRepository: SellersRepository, productsRepository: ProductsRepository);
    execute(params: Params): Promise<Result>;
}
export {};
