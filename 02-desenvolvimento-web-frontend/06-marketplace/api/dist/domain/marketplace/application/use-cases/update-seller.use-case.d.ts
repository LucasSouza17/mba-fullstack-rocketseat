import { Either } from '@core/logic/either';
import { HashComparer } from '@domain/marketplace/application/cryptography/hash-comparer';
import { HashGenerator } from '@domain/marketplace/application/cryptography/hash-generator';
import { AttachmentsRepository } from '@domain/marketplace/application/repositories/attachments.repository';
import { SellersRepository } from '@domain/marketplace/application/repositories/sellers.repository';
import { EmailAlreadyExistsError } from '@domain/marketplace/application/use-cases/errors/email-already-exists.error';
import { InvalidPasswordError } from '@domain/marketplace/application/use-cases/errors/invalid-password.error';
import { PhoneAlreadyExistsError } from '@domain/marketplace/application/use-cases/errors/phone-already-exists.error';
import { ResourceNotFoundError } from '@domain/marketplace/application/use-cases/errors/resource-not-found.error';
import { WrongCredentialsError } from '@domain/marketplace/application/use-cases/errors/wrong-credentials-error';
import { Seller } from '@domain/marketplace/enterprise/entities/user/seller';
interface Params {
    userId: string;
    name: string;
    phone: string;
    email: string;
    avatarId?: string;
    password?: string;
    newPassword?: string;
}
type Result = Either<EmailAlreadyExistsError | PhoneAlreadyExistsError | ResourceNotFoundError | WrongCredentialsError | InvalidPasswordError, {
    seller: Seller;
}>;
export declare class UpdateSellerUseCase {
    private sellersRepository;
    private attachmentsRepository;
    private hashComparer;
    private hashGenerator;
    constructor(sellersRepository: SellersRepository, attachmentsRepository: AttachmentsRepository, hashComparer: HashComparer, hashGenerator: HashGenerator);
    execute(params: Params): Promise<Result>;
}
export {};
