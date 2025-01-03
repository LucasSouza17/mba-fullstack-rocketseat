import { Entity } from '@core/entities/entity';
import { Attachment } from '@domain/marketplace/enterprise/entities/attachment';
export interface UserProps {
    name: string;
    email: string;
    phone: string;
    password: string;
    avatar?: Attachment;
}
export declare abstract class User extends Entity<UserProps> {
    get name(): string;
    set name(name: string);
    get email(): string;
    set email(email: string);
    get phone(): string;
    set phone(phone: string);
    get password(): string;
    set password(password: string);
    get avatar(): Attachment | undefined;
    set avatar(avatar: Attachment | undefined);
}
