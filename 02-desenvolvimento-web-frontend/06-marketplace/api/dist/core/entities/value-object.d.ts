export declare abstract class ValueObject<Props> {
    protected props: Props;
    protected constructor(props: Props);
    equals(vo: ValueObject<unknown>): boolean;
}
