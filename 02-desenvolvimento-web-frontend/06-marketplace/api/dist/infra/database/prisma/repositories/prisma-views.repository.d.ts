import { CountByProduct, CountBySeller, ViewsPerDay, ViewsRepository } from '@domain/marketplace/application/repositories/views.repository';
import { View } from '@domain/marketplace/enterprise/entities/view';
import { PrismaService } from '@infra/database/prisma/prisma.service';
export declare class PrismaViewsRepository implements ViewsRepository {
    private prisma;
    constructor(prisma: PrismaService);
    countByProduct(params: CountByProduct): Promise<number>;
    countPerDay(params: CountBySeller): Promise<ViewsPerDay[]>;
    countBySeller(params: CountBySeller): Promise<number>;
    isViewed(view: View): Promise<boolean>;
    create(view: View): Promise<View>;
}
