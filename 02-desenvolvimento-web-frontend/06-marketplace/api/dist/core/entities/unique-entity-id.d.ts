export declare class UniqueEntityID {
    private value;
    toString(): string;
    toValue(): string;
    constructor(value?: string);
    equals(id: UniqueEntityID): boolean;
}
