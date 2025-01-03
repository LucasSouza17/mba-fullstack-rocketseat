import { Prisma } from '@prisma/client';
import { View } from '@domain/marketplace/enterprise/entities/view';
export declare class PrismaViewsMapper {
    static toCreate(view: View): Prisma.ViewUncheckedCreateInput;
}
