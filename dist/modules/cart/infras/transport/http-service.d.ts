import { Request, Response } from "express";
import { ICartQueryRepository, ICartUseCase, IProductQueryRepository } from "../../interface";
export declare class CartHttpService {
    private readonly cartUseCase;
    private readonly productQueryRepo;
    private readonly cartQueryRepo;
    constructor(cartUseCase: ICartUseCase, productQueryRepo: IProductQueryRepository, cartQueryRepo: ICartQueryRepository);
    addProductToCartAPI(req: Request, res: Response): Promise<void>;
    removeProductFromCartAPI(req: Request, res: Response): Promise<void>;
    listItemsAPI(req: Request, res: Response): Promise<void>;
    updateProductQuantitiesAPI(req: Request, res: Response): Promise<void>;
    listItemsRPC(req: Request, res: Response): Promise<void>;
}
