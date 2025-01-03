import { Either } from '@core/logic/either';
import { SellersRepository } from '@domain/marketplace/application/repositories/sellers.repository';
import { ResourceNotFoundError } from '@domain/marketplace/application/use-cases/errors/resource-not-found.error';
import { Seller } from '@domain/marketplace/enterprise/entities/user/seller';
interface Params {
    id: string;
}
type Result = Either<ResourceNotFoundError, {
    seller: Seller;
}>;
export declare class SellerProfileUseCase {
    private sellersRepository;
    constructor(sellersRepository: SellersRepository);
    execute(params: Params): Promise<Result>;
}
export {};
