import { Entity } from '@core/entities/entity';
import { UniqueEntityID } from '@core/entities/unique-entity-id';
import { Optional } from '@core/types/optional';
import { Product } from '@domain/marketplace/enterprise/entities/product';
import { Viewer } from '@domain/marketplace/enterprise/entities/user/viewer';
interface Props {
    viewer: Viewer;
    product: Product;
    createdAt: Date;
}
export declare class View extends Entity<Props> {
    get viewer(): Viewer;
    get product(): Product;
    get createdAt(): Date;
    static create(props: Optional<Props, 'createdAt'>, id?: UniqueEntityID): View;
}
export {};
