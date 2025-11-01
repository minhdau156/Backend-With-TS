import { ICategoryUseCase } from "../../../category/interface";
import { CategoryCondDTO, CategoryCreateDTO, CategoryUpdateDTO } from "../../../category/model/dto";
import { Category } from "../../../category/model/model";
import { BaseHttpService } from "../../../../share/transport/http-server";
import { Request, Response } from "express";
export declare class CategoryHttpService extends BaseHttpService<Category, CategoryCreateDTO, CategoryUpdateDTO, CategoryCondDTO> {
    constructor(useCase: ICategoryUseCase);
    listAPI(req: Request, res: Response): Promise<void>;
    private buildTree;
}
