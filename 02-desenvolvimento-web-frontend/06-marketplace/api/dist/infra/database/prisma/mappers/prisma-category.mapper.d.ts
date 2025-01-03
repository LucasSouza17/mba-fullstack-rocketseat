import { Category as PrismaCategory } from '@prisma/client';
import { Category } from '@domain/marketplace/enterprise/entities/category';
export declare class PrismaCategoryMapper {
    static toDomain(raw: PrismaCategory): Category;
}
