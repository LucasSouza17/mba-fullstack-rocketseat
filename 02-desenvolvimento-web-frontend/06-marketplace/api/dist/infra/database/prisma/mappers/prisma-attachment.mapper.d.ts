import { Prisma, Attachment as PrismaAttachment } from '@prisma/client';
import { Attachment } from '@domain/marketplace/enterprise/entities/attachment';
export declare class PrismaAttachmentMapper {
    static toDomain(raw: PrismaAttachment): Attachment;
    static toPersistence(attachment: Attachment): Prisma.AttachmentUncheckedCreateInput;
}
