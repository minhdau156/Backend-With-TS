import { Request, Response } from "express";
import { ICartQueryRepository, ICartUseCase, IProductQueryRepository } from "../../interface";
import { CartItem } from "../../model";

export class CartHttpService {
    constructor (
        private readonly cartUseCase: ICartUseCase,
        private readonly productQueryRepo: IProductQueryRepository,
        private readonly cartQueryRepo: ICartQueryRepository
    ) {}
    async addProductToCartAPI(req: Request, res: Response) {
        const requester = res.locals.requester;
        const {sub: userId} = requester;
        const dto = { ...req.body, userId }
        const result = await this.cartUseCase.addProductToCart(dto);
        res.status(200).json({
            data: result
        });
    }
    async removeProductFromCartAPI(req: Request, res: Response) {
        const requester = res.locals.requester;
        const {sub: userId} = requester;
        const {id} = req.params;

        const result = await this.cartUseCase.removeProductFromCart(id, userId);
        res.status(200).json({
            data: result
        });
    }
    async listItemsAPI(req: Request, res: Response) {
        const requester = res.locals.requester;
        const {sub: userId} = requester;
        const result = await this.cartQueryRepo.listItems(userId);

        //Get product by ids
        const productIds = result.map(item => item.productId);
        const products = await this.productQueryRepo.findByIds(productIds);
        const itemMap = new Map<string, CartItem>();
        result.forEach(item => itemMap.set(item.productId, item));//product id -> cart item

        products.forEach(product => {
            const cartItem = itemMap.get(product.id);
            if (cartItem) {
                cartItem.product = product;
            }
        });

        //Optional: get cart products by ids
        // ... mapping
        res.status(200).json({
            data: result
        });
    }
    async updateProductQuantitiesAPI(req: Request, res: Response) {
        const requester = res.locals.requester;
        const {sub: userId} = requester;
        const dto = req.body;
        await this.cartUseCase.updateProductQuantities(dto, userId);
        res.status(200).json({
            data: true
        });
    }
    async listItemsRPC(req: Request, res: Response) {
        
        const { userId } = req.body;
        const result = await this.cartQueryRepo.listItems(userId);

        //Get product by ids
        const productIds = result.map(item => item.productId);
        const products = await this.productQueryRepo.findByIds(productIds);
        const itemMap = new Map<string, CartItem>();
        result.forEach(item => itemMap.set(item.productId, item));//product id -> cart item

        products.forEach(product => {
            const cartItem = itemMap.get(product.id);
            if (cartItem) {
                cartItem.product = product;
            }
        });

        //Optional: get cart products by ids
        // ... mapping
        res.status(200).json({
            data: result
        });
    }
}