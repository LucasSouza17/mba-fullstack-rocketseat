import { Either } from '@core/logic/either';
import { SellersRepository } from '@domain/marketplace/application/repositories/sellers.repository';
import { ViewsRepository } from '@domain/marketplace/application/repositories/views.repository';
import { ResourceNotFoundError } from '@domain/marketplace/application/use-cases/errors/resource-not-found.error';
interface Params {
    sellerId: string;
    from: Date;
}
type Result = Either<ResourceNotFoundError, {
    amount: number;
}>;
export declare class CountSellerViewsUseCase {
    private sellersRepository;
    private viewsRepository;
    constructor(sellersRepository: SellersRepository, viewsRepository: ViewsRepository);
    execute(params: Params): Promise<Result>;
}
export {};
