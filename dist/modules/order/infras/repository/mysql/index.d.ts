import { IOrderCommandRepository } from "../../../../../modules/order/interface";
import { Order, OrderUpdateDTO } from "../../../../../modules/order/model";
import { Model, Sequelize } from "sequelize";
export declare class OrderPersistence extends Model {
}
export declare class OrderItemPersistence extends Model {
}
export declare const modelName = "Order";
export declare function init(sequelize: Sequelize): void;
export declare class OrderCommandRepository implements IOrderCommandRepository {
    private readonly sequelize;
    private readonly modelName;
    constructor(sequelize: Sequelize, modelName: string);
    insert(data: Order): Promise<void>;
    update(id: string, data: OrderUpdateDTO): Promise<boolean>;
    delete(id: string, isHard: boolean): Promise<boolean>;
}
