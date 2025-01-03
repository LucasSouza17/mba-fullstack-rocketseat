import { Entity } from '@core/entities/entity';
import { UniqueEntityID } from '@core/entities/unique-entity-id';
interface AttachmentProps {
    path: string;
}
export declare class Attachment extends Entity<AttachmentProps> {
    get path(): string;
    static create(props: AttachmentProps, id?: UniqueEntityID): Attachment;
}
export {};
