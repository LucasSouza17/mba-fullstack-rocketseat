import { WatchedList } from '@core/entities/watched-list';
import { Attachment } from '@domain/marketplace/enterprise/entities/attachment';
export declare class ProductAttachments extends WatchedList<Attachment> {
    compareItems(a: Attachment, b: Attachment): boolean;
    static create(attachments?: Attachment[]): ProductAttachments;
}
