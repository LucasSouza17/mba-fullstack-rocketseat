import { Either } from '@core/logic/either';
import { Encrypter } from '@domain/marketplace/application/cryptography/encrypter';
import { HashComparer } from '@domain/marketplace/application/cryptography/hash-comparer';
import { SellersRepository } from '@domain/marketplace/application/repositories/sellers.repository';
import { WrongCredentialsError } from '@domain/marketplace/application/use-cases/errors/wrong-credentials-error';
interface Params {
    email: string;
    password: string;
}
type Result = Either<WrongCredentialsError, {
    accessToken: string;
}>;
export declare class AuthenticateSellerUseCase {
    private sellersRepository;
    private hashComparer;
    private encrypter;
    constructor(sellersRepository: SellersRepository, hashComparer: HashComparer, encrypter: Encrypter);
    execute(params: Params): Promise<Result>;
}
export {};
