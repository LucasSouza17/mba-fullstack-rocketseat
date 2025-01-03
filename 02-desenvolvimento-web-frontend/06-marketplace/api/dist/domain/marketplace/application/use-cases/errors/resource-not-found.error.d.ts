import { UseCaseError } from '@core/errors/use-case.error';
export declare class ResourceNotFoundError extends UseCaseError {
    constructor(resource: string, identifier: string, value: string);
}
