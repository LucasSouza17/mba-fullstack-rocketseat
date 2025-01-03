import { User as PrismaUser, Attachment as PrismaAttachment } from '@prisma/client';
import { Viewer } from '@domain/marketplace/enterprise/entities/user/viewer';
type Raw = PrismaUser & {
    avatar?: PrismaAttachment | null;
};
export declare class PrismaViewerMapper {
    static toDomain(raw: Raw): Viewer;
}
export {};
