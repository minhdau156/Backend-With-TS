import { Model, Sequelize } from "sequelize";
export declare class CartItemPersistence extends Model {
}
export declare const modelName = "Cart";
export declare function init(sequelize: Sequelize): void;
