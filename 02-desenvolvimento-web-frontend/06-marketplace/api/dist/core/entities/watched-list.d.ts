export declare abstract class WatchedList<T> {
    currentItems: T[];
    private initial;
    private new;
    private removed;
    constructor(initialItems?: T[]);
    abstract compareItems(a: T, b: T): boolean;
    getItems(): T[];
    getNewItems(): T[];
    getRemovedItems(): T[];
    private isCurrentItem;
    private isNewItem;
    private isRemovedItem;
    private removeFromNew;
    private removeFromCurrent;
    private removeFromRemoved;
    private wasAddedInitially;
    exists(item: T): boolean;
    add(item: T): void;
    remove(item: T): void;
    update(items: T[]): void;
}
