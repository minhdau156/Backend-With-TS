import { IProductQueryRepository } from "../../../../../modules/cart/interface";
import { CartProduct } from "../../../../../modules/cart/model";
export declare class CartProductRPCRepo implements IProductQueryRepository {
    private readonly productServiceUrl;
    constructor(productServiceUrl: string);
    findById(id: string): Promise<CartProduct | null>;
    findByIds(ids: string[]): Promise<Array<CartProduct>>;
}
