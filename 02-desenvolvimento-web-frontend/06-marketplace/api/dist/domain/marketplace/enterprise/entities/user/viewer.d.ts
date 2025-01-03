import { UniqueEntityID } from '@core/entities/unique-entity-id';
import { User, UserProps } from '@domain/marketplace/enterprise/entities/user/user';
interface ViewerProps extends UserProps {
}
export declare class Viewer extends User {
    static create(props: ViewerProps, id?: UniqueEntityID): Viewer;
}
export {};
