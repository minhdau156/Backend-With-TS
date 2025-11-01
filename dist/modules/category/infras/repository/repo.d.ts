import { CategoryCondDTO, CategoryUpdateDTO } from "../../../category/model/dto";
import { Category } from "../../../category/model/model";
import { BaseCommandRepositorySequelize, BaseQueryRepositorySequelize, BaseRepositorySequelize } from "../../../../share/repository/repo-sequelize";
import { Sequelize } from "sequelize";
export declare class MySQLCategoryRepository extends BaseRepositorySequelize<Category, CategoryCondDTO, CategoryUpdateDTO> {
    readonly sequelize: Sequelize;
    readonly modelName: string;
    constructor(sequelize: Sequelize, modelName: string);
}
export declare class MYSQLCategoryQueryRepository extends BaseQueryRepositorySequelize<Category, CategoryCondDTO> {
    readonly sequelize: Sequelize;
    readonly modelName: string;
    constructor(sequelize: Sequelize, modelName: string);
}
export declare class MYSQLCategoryCommandRepository extends BaseCommandRepositorySequelize<Category, CategoryUpdateDTO> {
    readonly sequelize: Sequelize;
    readonly modelName: string;
    constructor(sequelize: Sequelize, modelName: string);
}
