import { Model, Sequelize } from "sequelize";
export declare class ProductPersistence extends Model {
}
export declare class CategoryPersistence extends Model {
}
export declare class BrandPersistence extends Model {
}
export declare const modelName = "Product";
export declare function init(sequelize: Sequelize): void;
