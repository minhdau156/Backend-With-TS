import { Model, Sequelize } from "sequelize";
export declare class CategoryPersistence extends Model {
    id: string;
    status: string;
}
export declare const modelName = "Category";
export declare function init(sequelize: Sequelize): void;
