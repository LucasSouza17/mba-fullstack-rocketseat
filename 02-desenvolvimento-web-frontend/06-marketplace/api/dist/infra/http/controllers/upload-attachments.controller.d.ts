import { z } from 'nestjs-zod/z';
import { UploadAttachmentUseCase } from '@domain/marketplace/application/use-cases/upload-attachments.use-case';
import { EnvService } from '@infra/env/env.service';
type MulterFile = Express.Multer.File;
declare const UploadAttachmentsResponse_base: import("nestjs-zod").ZodDto<{
    attachments: {
        id: string;
        url: string;
    }[];
}, z.ZodObjectDef<{
    attachments: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        url: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: string;
        url: string;
    }, {
        id: string;
        url: string;
    }>, "many">;
}, "strip", z.ZodTypeAny>, {
    attachments: {
        id: string;
        url: string;
    }[];
}>;
declare class UploadAttachmentsResponse extends UploadAttachmentsResponse_base {
}
export declare class UploadAttachmentsController {
    private uploadAttachment;
    private env;
    constructor(uploadAttachment: UploadAttachmentUseCase, env: EnvService);
    handle(files: MulterFile[]): Promise<UploadAttachmentsResponse>;
}
export {};
