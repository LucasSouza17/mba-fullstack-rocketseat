import { AsyncMaybe } from '@core/logic/maybe';
import { SellersRepository } from '@domain/marketplace/application/repositories/sellers.repository';
import { Seller } from '@domain/marketplace/enterprise/entities/user/seller';
import { PrismaService } from '@infra/database/prisma/prisma.service';
export declare class PrismaSellersRepository implements SellersRepository {
    private prisma;
    constructor(prisma: PrismaService);
    findById(id: string): AsyncMaybe<Seller>;
    findByEmail(email: string): AsyncMaybe<Seller>;
    findByPhone(phone: string): AsyncMaybe<Seller>;
    save(seller: Seller): Promise<Seller>;
    create(seller: Seller): Promise<Seller>;
}
