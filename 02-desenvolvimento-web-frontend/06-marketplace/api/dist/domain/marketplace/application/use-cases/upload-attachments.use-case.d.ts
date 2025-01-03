import { Either } from '@core/logic/either';
import { AttachmentsRepository } from '@domain/marketplace/application/repositories/attachments.repository';
import { Uploader } from '@domain/marketplace/application/storage/uploader';
import { Attachment } from '@domain/marketplace/enterprise/entities/attachment';
interface Params {
    files: File[];
}
type Result = Either<null, {
    attachments: Attachment[];
}>;
export declare class UploadAttachmentUseCase {
    private attachmentsRepository;
    private uploader;
    constructor(attachmentsRepository: AttachmentsRepository, uploader: Uploader);
    execute(params: Params): Promise<Result>;
}
export {};
