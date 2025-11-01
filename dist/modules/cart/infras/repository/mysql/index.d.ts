import { ICartCommandRepository, ICartQueryRepository } from "../../../../../modules/cart/interface";
import { CartItem, CartItemCondDTO, UpdateCartItemDTO } from "../../../../../modules/cart/model";
import { Sequelize } from "sequelize";
export declare class CartRepository implements ICartCommandRepository, ICartQueryRepository {
    private readonly sequelize;
    private readonly modelName;
    constructor(sequelize: Sequelize, modelName: string);
    get(id: string): Promise<CartItem | null>;
    listItems(userId: string): Promise<Array<CartItem>>;
    findByCond(cond: CartItemCondDTO): Promise<CartItem | null>;
    insert(data: CartItem): Promise<boolean>;
    update(id: string, data: CartItem): Promise<boolean>;
    remove(id: string, isHard: boolean): Promise<boolean>;
    updateMany(dtos: UpdateCartItemDTO[], userId: string): Promise<boolean>;
}
