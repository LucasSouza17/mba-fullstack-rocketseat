import { UniqueEntityID } from '@core/entities/unique-entity-id';
import { User, UserProps } from '@domain/marketplace/enterprise/entities/user/user';
interface SellerProps extends UserProps {
}
export declare class Seller extends User {
    static create(props: SellerProps, id?: UniqueEntityID): Seller;
}
export {};
