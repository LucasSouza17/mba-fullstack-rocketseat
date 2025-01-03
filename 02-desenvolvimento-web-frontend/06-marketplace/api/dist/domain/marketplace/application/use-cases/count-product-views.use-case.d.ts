import { Either } from '@core/logic/either';
import { ProductsRepository } from '@domain/marketplace/application/repositories/products.repository';
import { ViewsRepository } from '@domain/marketplace/application/repositories/views.repository';
import { ResourceNotFoundError } from '@domain/marketplace/application/use-cases/errors/resource-not-found.error';
interface Params {
    productId: string;
    from: Date;
}
type Result = Either<ResourceNotFoundError, {
    amount: number;
}>;
export declare class CountProductViewsUseCase {
    private productsRepository;
    private viewsRepository;
    constructor(productsRepository: ProductsRepository, viewsRepository: ViewsRepository);
    execute(params: Params): Promise<Result>;
}
export {};
