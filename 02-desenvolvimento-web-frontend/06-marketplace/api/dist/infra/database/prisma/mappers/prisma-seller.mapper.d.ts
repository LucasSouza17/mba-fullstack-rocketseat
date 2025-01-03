import { User as PrismaUser, Attachment as PrismaAttachment, Prisma } from '@prisma/client';
import { Seller } from '@domain/marketplace/enterprise/entities/user/seller';
type Raw = PrismaUser & {
    avatar?: PrismaAttachment | null;
};
export declare class PrismaSellerMapper {
    static toDomain(raw: Raw): Seller;
    static toCreate(seller: Seller): Prisma.UserCreateInput;
    static toUpdate(seller: Seller): Prisma.UserUpdateInput;
}
export {};
