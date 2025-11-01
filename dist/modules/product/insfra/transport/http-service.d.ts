import { IQueryRepository } from "../../../../share/interface";
import { IBrandQueryRepository, ICategoryQueryRepository, IProductUseCase } from "../../../product/interface";
import { ProductCondDTO, ProductCreateDTO, ProductUpdateDTO } from "../../../product/model/dto";
import { Product } from "../../../product/model/product";
import { BaseHttpService } from "../../../../share/transport/http-server";
import { Request, Response } from "express";
export declare class ProductHTTPService extends BaseHttpService<Product, ProductCreateDTO, ProductUpdateDTO, ProductCondDTO> {
    private readonly productBrandRepository;
    private readonly productCategoryRepository;
    private readonly productQueryRepo;
    constructor(useCase: IProductUseCase, productBrandRepository: IBrandQueryRepository, productCategoryRepository: ICategoryQueryRepository, productQueryRepo: IQueryRepository<Product, ProductCondDTO>);
    getDetailAPI(req: Request, res: Response): Promise<void>;
    listProductByIdsAPI(req: Request, res: Response): Promise<void>;
}
