import { Either } from '@core/logic/either';
import { CategoriesRepository } from '@domain/marketplace/application/repositories/categories.repository';
import { Category } from '@domain/marketplace/enterprise/entities/category';
type Result = Either<null, {
    categories: Category[];
}>;
export declare class ListAllCategoriesUseCase {
    private categoriesRepository;
    constructor(categoriesRepository: CategoriesRepository);
    execute(): Promise<Result>;
}
export {};
