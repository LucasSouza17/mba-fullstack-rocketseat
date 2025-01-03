import { UseCaseError } from '@core/errors/use-case.error';
export declare class NotAllowedError extends UseCaseError {
    constructor(message?: string);
}
