import { z } from 'zod';
export declare const envSchema: z.ZodObject<{
    DATABASE_URL: z.ZodString;
    JWT_PRIVATE_KEY: z.ZodString;
    JWT_PUBLIC_KEY: z.ZodString;
    ATTACHMENTS_BASE_URL: z.ZodString;
    PORT: z.ZodDefault<z.ZodOptional<z.ZodNumber>>;
}, "strip", z.ZodTypeAny, {
    DATABASE_URL: string;
    JWT_PRIVATE_KEY: string;
    JWT_PUBLIC_KEY: string;
    ATTACHMENTS_BASE_URL: string;
    PORT: number;
}, {
    DATABASE_URL: string;
    JWT_PRIVATE_KEY: string;
    JWT_PUBLIC_KEY: string;
    ATTACHMENTS_BASE_URL: string;
    PORT?: number | undefined;
}>;
export type Env = z.infer<typeof envSchema>;
