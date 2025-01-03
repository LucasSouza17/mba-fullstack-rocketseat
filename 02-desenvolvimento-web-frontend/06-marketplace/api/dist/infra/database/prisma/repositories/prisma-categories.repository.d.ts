import { AsyncMaybe } from '@core/logic/maybe';
import { CategoriesRepository } from '@domain/marketplace/application/repositories/categories.repository';
import { Category } from '@domain/marketplace/enterprise/entities/category';
import { PrismaService } from '@infra/database/prisma/prisma.service';
export declare class PrismaCategoriesRepository implements CategoriesRepository {
    private prisma;
    constructor(prisma: PrismaService);
    listAll(): Promise<Category[]>;
    findById(id: string): AsyncMaybe<Category>;
}
