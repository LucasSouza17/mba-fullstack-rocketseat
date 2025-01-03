export interface UploadParams {
    file: File;
}
export declare abstract class Uploader {
    abstract upload(params: UploadParams): Promise<{
        path: string;
    }>;
}
