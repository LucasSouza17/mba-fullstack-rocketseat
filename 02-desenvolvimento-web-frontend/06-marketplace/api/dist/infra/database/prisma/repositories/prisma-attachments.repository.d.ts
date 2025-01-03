import { AsyncMaybe } from '@core/logic/maybe';
import { AsyncFindMany, AttachmentsRepository } from '@domain/marketplace/application/repositories/attachments.repository';
import { Attachment } from '@domain/marketplace/enterprise/entities/attachment';
import { PrismaService } from '@infra/database/prisma/prisma.service';
export declare class PrismaAttachmentsRepository implements AttachmentsRepository {
    private prisma;
    constructor(prisma: PrismaService);
    findManyByIds(ids: string[]): AsyncFindMany<Attachment>;
    findById(id: string): AsyncMaybe<Attachment>;
    create(attachment: Attachment): Promise<Attachment>;
    createMany(attachments: Attachment[]): Promise<Attachment[]>;
}
