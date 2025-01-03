import { Prisma, User as PrismaUser, Product as PrismaProduct, Category as PrismaCategory, Attachment as PrismaAttachment } from '@prisma/client';
import { Product } from '@domain/marketplace/enterprise/entities/product';
type Raw = PrismaProduct & {
    category?: PrismaCategory;
    owner?: PrismaUser;
    attachments?: PrismaAttachment[];
};
export declare class PrismaProductMapper {
    static toDomain(raw: Raw): Product;
    static toCreate(product: Product): Prisma.ProductCreateInput;
    static toUpdate(product: Product): Prisma.ProductUpdateInput;
}
export {};
