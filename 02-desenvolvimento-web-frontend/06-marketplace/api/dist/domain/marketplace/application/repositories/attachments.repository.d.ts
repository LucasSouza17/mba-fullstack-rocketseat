import { AsyncMaybe } from '@core/logic/maybe';
import { Attachment } from '@domain/marketplace/enterprise/entities/attachment';
export interface FindMany<T> {
    data: T[];
    hasAll: boolean;
    inexistentIds: string[];
}
export type AsyncFindMany<T> = Promise<FindMany<T>>;
export declare abstract class AttachmentsRepository {
    abstract findManyByIds(ids: string[]): AsyncFindMany<Attachment>;
    abstract findById(id: string): AsyncMaybe<Attachment>;
    abstract create(attachment: Attachment): Promise<Attachment>;
    abstract createMany(attachments: Attachment[]): Promise<Attachment[]>;
}
