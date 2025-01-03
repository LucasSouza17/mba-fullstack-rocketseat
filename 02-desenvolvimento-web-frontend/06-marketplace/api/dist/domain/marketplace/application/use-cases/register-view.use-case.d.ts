import { NotAllowedError } from '@core/errors/common/not-allowed.error';
import { Either } from '@core/logic/either';
import { ProductsRepository } from '@domain/marketplace/application/repositories/products.repository';
import { ViewersRepository } from '@domain/marketplace/application/repositories/viewers.repository';
import { ViewsRepository } from '@domain/marketplace/application/repositories/views.repository';
import { ResourceNotFoundError } from '@domain/marketplace/application/use-cases/errors/resource-not-found.error';
import { View } from '@domain/marketplace/enterprise/entities/view';
interface Params {
    productId: string;
    viewerId: string;
}
type Result = Either<ResourceNotFoundError | NotAllowedError, {
    view: View;
}>;
export declare class RegisterViewUseCase {
    private productsRepository;
    private viewersRepository;
    private viewsRepository;
    constructor(productsRepository: ProductsRepository, viewersRepository: ViewersRepository, viewsRepository: ViewsRepository);
    execute(params: Params): Promise<Result>;
}
export {};
