import { IRepository } from "../../../share/interface";
import { PagingDTO } from "../../../share/model/paging";
import { IBrandQueryRepository, ICategoryQueryRepository, IProductUseCase } from "../interface";
import { ProductCondDTO, ProductCreateDTO, ProductUpdateDTO } from "../model/dto";
import { Product } from "../model/product";
export declare class ProductUseCase implements IProductUseCase {
    private readonly repository;
    private readonly productBrandRepository;
    private readonly productCategoryRepository;
    constructor(repository: IRepository<Product, ProductCondDTO, ProductUpdateDTO>, productBrandRepository: IBrandQueryRepository, productCategoryRepository: ICategoryQueryRepository);
    create(data: ProductCreateDTO): Promise<string>;
    getDetail(id: string): Promise<Product | null>;
    update(id: string, data: ProductUpdateDTO): Promise<boolean>;
    list(cond: ProductCondDTO, paging: PagingDTO): Promise<Product[]>;
    delete(id: string): Promise<boolean>;
}
