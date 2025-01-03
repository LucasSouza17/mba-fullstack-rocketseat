import { Entity } from '@core/entities/entity';
import { UniqueEntityID } from '@core/entities/unique-entity-id';
import { Optional } from '@core/types/optional';
import { Replace } from '@core/types/replace';
import { Attachment } from '@domain/marketplace/enterprise/entities/attachment';
import { Category } from '@domain/marketplace/enterprise/entities/category';
import { ProductAttachments } from '@domain/marketplace/enterprise/entities/product-attachments';
import { Seller } from '@domain/marketplace/enterprise/entities/user/seller';
export declare enum ProductStatus {
    AVAILABLE = "available",
    SOLD = "sold",
    CANCELLED = "cancelled"
}
interface ProductProps {
    title: string;
    description: string;
    priceInCents: number;
    status: ProductStatus;
    owner: Seller;
    category: Category;
    attachments: ProductAttachments;
    createdAt: Date;
}
export declare class Product extends Entity<ProductProps> {
    static Status: typeof ProductStatus;
    get title(): string;
    set title(value: string);
    get description(): string;
    set description(value: string);
    get priceInCents(): number;
    set priceInCents(value: number);
    get status(): ProductStatus;
    set status(value: ProductStatus);
    get owner(): Seller;
    get category(): Category;
    set category(value: Category);
    get attachments(): ProductAttachments;
    get createdAt(): Date;
    static create(props: Replace<Optional<ProductProps, 'createdAt' | 'status'>, {
        attachments?: Attachment[];
    }>, id?: UniqueEntityID): Product;
}
export {};
