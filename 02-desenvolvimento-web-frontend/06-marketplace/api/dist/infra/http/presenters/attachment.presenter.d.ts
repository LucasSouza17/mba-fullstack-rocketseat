import { z } from 'nestjs-zod/z';
import { Attachment as AttachmentEntity } from '@domain/marketplace/enterprise/entities/attachment';
import { EnvService } from '@infra/env/env.service';
export declare class AttachmentPresenter {
    static zod: z.ZodObject<{
        id: z.ZodString;
        url: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: string;
        url: string;
    }, {
        id: string;
        url: string;
    }>;
    static toHTTP(envService: EnvService, attachment: AttachmentEntity): {
        id: string;
        url: string;
    };
}
