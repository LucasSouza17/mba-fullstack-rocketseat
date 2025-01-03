import { Entity } from '@core/entities/entity';
import { UniqueEntityID } from '@core/entities/unique-entity-id';
interface CategoryProps {
    title: string;
    slug: string;
}
export declare class Category extends Entity<CategoryProps> {
    get title(): string;
    get slug(): string;
    static create(props: CategoryProps, id?: UniqueEntityID): Category;
}
export {};
