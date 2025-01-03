import { View } from '@domain/marketplace/enterprise/entities/view';
export interface CountBySeller {
    sellerId: string;
    from: Date;
}
export interface CountByProduct {
    productId: string;
    from: Date;
}
export interface ViewsPerDay {
    date: Date;
    amount: number;
}
export declare abstract class ViewsRepository {
    abstract countBySeller(params: CountBySeller): Promise<number>;
    abstract countPerDay(params: CountBySeller): Promise<ViewsPerDay[]>;
    abstract countByProduct(params: CountByProduct): Promise<number>;
    abstract isViewed(view: View): Promise<boolean>;
    abstract create(view: View): Promise<View>;
}
