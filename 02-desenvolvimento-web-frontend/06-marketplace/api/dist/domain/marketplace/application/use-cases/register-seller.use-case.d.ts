import { Either } from '@core/logic/either';
import { HashGenerator } from '@domain/marketplace/application/cryptography/hash-generator';
import { AttachmentsRepository } from '@domain/marketplace/application/repositories/attachments.repository';
import { SellersRepository } from '@domain/marketplace/application/repositories/sellers.repository';
import { EmailAlreadyExistsError } from '@domain/marketplace/application/use-cases/errors/email-already-exists.error';
import { PhoneAlreadyExistsError } from '@domain/marketplace/application/use-cases/errors/phone-already-exists.error';
import { ResourceNotFoundError } from '@domain/marketplace/application/use-cases/errors/resource-not-found.error';
import { Seller } from '@domain/marketplace/enterprise/entities/user/seller';
interface Params {
    name: string;
    phone: string;
    email: string;
    password: string;
    avatarId?: string;
}
type Result = Either<EmailAlreadyExistsError | PhoneAlreadyExistsError | ResourceNotFoundError, {
    seller: Seller;
}>;
export declare class RegisterSellerUseCase {
    private sellersRepository;
    private attachmentsRepository;
    private hashGenerator;
    constructor(sellersRepository: SellersRepository, attachmentsRepository: AttachmentsRepository, hashGenerator: HashGenerator);
    execute(params: Params): Promise<Result>;
}
export {};
