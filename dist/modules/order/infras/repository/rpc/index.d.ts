import { ICartQueryRepository } from "../../../../../modules/order/interface";
import { CartItem } from "../../../../../modules/order/model";
export declare class CartQueryRepository implements ICartQueryRepository {
    private readonly cartServiceUrl;
    constructor(cartServiceUrl: string);
    listItems(userId: string): Promise<Array<CartItem>>;
    clearItems(userId: string): Promise<boolean>;
}
