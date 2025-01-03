import { AsyncMaybe } from '@core/logic/maybe';
import { ViewersRepository } from '@domain/marketplace/application/repositories/viewers.repository';
import { Viewer } from '@domain/marketplace/enterprise/entities/user/viewer';
import { PrismaService } from '@infra/database/prisma/prisma.service';
export declare class PrismaViewersRepository implements ViewersRepository {
    private prisma;
    constructor(prisma: PrismaService);
    findById(id: string): AsyncMaybe<Viewer>;
}
