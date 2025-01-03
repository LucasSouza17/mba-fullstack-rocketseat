import { UseCaseError } from '@core/errors/use-case.error';
export declare class InvalidPasswordError extends UseCaseError {
    constructor(message?: string);
}
