import { Uploader, UploadParams } from '@domain/marketplace/application/storage/uploader';
export declare class DiskStorage implements Uploader {
    upload(params: UploadParams): Promise<{
        path: string;
    }>;
}
