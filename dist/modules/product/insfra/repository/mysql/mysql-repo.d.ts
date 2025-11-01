import { ProductCondDTO, ProductUpdateDTO } from "../../../../product/model/dto";
import { Product } from "../../../../product/model/product";
import { BaseCommandRepositorySequelize, BaseQueryRepositorySequelize, BaseRepositorySequelize } from "../../../../../share/repository/repo-sequelize";
import { Sequelize } from "sequelize";
export declare class MySQLProductRepository extends BaseRepositorySequelize<Product, ProductCondDTO, ProductUpdateDTO> {
    readonly sequelize: Sequelize;
    readonly modelName: string;
    constructor(sequelize: Sequelize, modelName: string);
}
export declare class MYSQLProductQueryRepository extends BaseQueryRepositorySequelize<Product, ProductCondDTO> {
    readonly sequelize: Sequelize;
    readonly modelName: string;
    constructor(sequelize: Sequelize, modelName: string);
}
export declare class MYSQLProductCommandRepository extends BaseCommandRepositorySequelize<Product, ProductUpdateDTO> {
    readonly sequelize: Sequelize;
    readonly modelName: string;
    constructor(sequelize: Sequelize, modelName: string);
}
