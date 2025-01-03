import { NotAllowedError } from '@core/errors/common/not-allowed.error';
import { Either } from '@core/logic/either';
import { AttachmentsRepository } from '@domain/marketplace/application/repositories/attachments.repository';
import { CategoriesRepository } from '@domain/marketplace/application/repositories/categories.repository';
import { ProductsRepository } from '@domain/marketplace/application/repositories/products.repository';
import { SellersRepository } from '@domain/marketplace/application/repositories/sellers.repository';
import { ResourceNotFoundError } from '@domain/marketplace/application/use-cases/errors/resource-not-found.error';
import { Product } from '@domain/marketplace/enterprise/entities/product';
interface Params {
    id: string;
    ownerId: string;
    title: string;
    description: string;
    priceInCents: number;
    categoryId: string;
    attachmentsIds: string[];
}
type Result = Either<ResourceNotFoundError | NotAllowedError, {
    product: Product;
}>;
export declare class EditProductUseCase {
    private sellersRepository;
    private productsRepository;
    private categoriesRepository;
    private attachmentsRepository;
    constructor(sellersRepository: SellersRepository, productsRepository: ProductsRepository, categoriesRepository: CategoriesRepository, attachmentsRepository: AttachmentsRepository);
    execute(params: Params): Promise<Result>;
}
export {};
