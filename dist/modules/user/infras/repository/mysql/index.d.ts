import { User, UserCondDTO, UserUpdateDTO } from "../../../../user/model";
import { BaseCommandRepositorySequelize, BaseQueryRepositorySequelize, BaseRepositorySequelize } from "../../../../../share/repository/repo-sequelize";
import { Sequelize } from "sequelize";
export declare class MySQLUserRepository extends BaseRepositorySequelize<User, UserCondDTO, UserUpdateDTO> {
    readonly sequelize: Sequelize;
    readonly modelName: string;
    constructor(sequelize: Sequelize, modelName: string);
}
export declare class MYSQLUserCommandRepository extends BaseCommandRepositorySequelize<User, UserUpdateDTO> {
    readonly sequelize: Sequelize;
    readonly modelName: string;
    constructor(sequelize: Sequelize, modelName: string);
}
export declare class MYSQLUserQueryRepository extends BaseQueryRepositorySequelize<User, UserCondDTO> {
    readonly sequelize: Sequelize;
    readonly modelName: string;
    constructor(sequelize: Sequelize, modelName: string);
}
