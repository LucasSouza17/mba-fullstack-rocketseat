import { UseCaseError } from '@core/errors/use-case.error';
export declare class PhoneAlreadyExistsError extends UseCaseError {
    constructor(phone: string);
}
