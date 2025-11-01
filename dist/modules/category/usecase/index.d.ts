import { IRepository } from "../../../share/interface";
import { PagingDTO } from "../../../share/model/paging";
import { ICategoryUseCase } from "../interface";
import { CategoryCondDTO, CategoryCreateDTO, CategoryUpdateDTO } from "../model/dto";
import { Category } from "../model/model";
export declare class CategoryUseCase implements ICategoryUseCase {
    private readonly repository;
    constructor(repository: IRepository<Category, CategoryCondDTO, CategoryUpdateDTO>);
    create(data: CategoryCreateDTO): Promise<string>;
    getDetail(id: string): Promise<Category | null>;
    list(cond: CategoryCondDTO, paging: PagingDTO): Promise<Array<Category>>;
    update(id: string, data: CategoryUpdateDTO): Promise<boolean>;
    delete(id: string): Promise<boolean>;
}
