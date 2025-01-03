import { UseCaseError } from '@core/errors/use-case.error';
export declare class EmailAlreadyExistsError extends UseCaseError {
    constructor(email: string);
}
