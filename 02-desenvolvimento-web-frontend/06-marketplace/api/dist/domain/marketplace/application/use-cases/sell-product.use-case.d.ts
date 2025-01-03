import { Either } from '@core/logic/either';
import { AttachmentsRepository } from '@domain/marketplace/application/repositories/attachments.repository';
import { CategoriesRepository } from '@domain/marketplace/application/repositories/categories.repository';
import { ProductsRepository } from '@domain/marketplace/application/repositories/products.repository';
import { SellersRepository } from '@domain/marketplace/application/repositories/sellers.repository';
import { ResourceNotFoundError } from '@domain/marketplace/application/use-cases/errors/resource-not-found.error';
import { Product } from '@domain/marketplace/enterprise/entities/product';
interface Params {
    ownerId: string;
    categoryId: string;
    title: string;
    description: string;
    priceInCents: number;
    attachmentsIds: string[];
}
type Result = Either<ResourceNotFoundError, {
    product: Product;
}>;
export declare class SellProductUseCase {
    private sellersRepository;
    private categoryRepository;
    private productsRepository;
    private attachmentsRepository;
    constructor(sellersRepository: SellersRepository, categoryRepository: CategoriesRepository, productsRepository: ProductsRepository, attachmentsRepository: AttachmentsRepository);
    execute(params: Params): Promise<Result>;
}
export {};
