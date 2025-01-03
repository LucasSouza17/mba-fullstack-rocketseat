import { Either } from '@core/logic/either';
import { ProductsRepository } from '@domain/marketplace/application/repositories/products.repository';
import { Product } from '@domain/marketplace/enterprise/entities/product';
interface Params {
    page: number;
    search?: string;
    status?: Product['status'];
}
type Result = Either<null, {
    products: Product[];
}>;
export declare class ListAllProductsUseCase {
    private productsRepository;
    constructor(productsRepository: ProductsRepository);
    execute(params: Params): Promise<Result>;
}
export {};
