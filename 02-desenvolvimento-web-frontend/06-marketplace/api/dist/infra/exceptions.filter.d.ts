import { ArgumentsHost } from '@nestjs/common';
import { BaseExceptionFilter } from '@nestjs/core';
export declare class ExceptionsFilter extends BaseExceptionFilter {
    catch(exception: unknown, host: ArgumentsHost): void;
}
