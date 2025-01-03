import { Either } from '@core/logic/either';
import { ProductsRepository } from '@domain/marketplace/application/repositories/products.repository';
import { ResourceNotFoundError } from '@domain/marketplace/application/use-cases/errors/resource-not-found.error';
import { Product } from '@domain/marketplace/enterprise/entities/product';
interface Params {
    id: string;
}
type Result = Either<ResourceNotFoundError, {
    product: Product;
}>;
export declare class GetProductUseCase {
    private productsRepository;
    constructor(productsRepository: ProductsRepository);
    execute(params: Params): Promise<Result>;
}
export {};
