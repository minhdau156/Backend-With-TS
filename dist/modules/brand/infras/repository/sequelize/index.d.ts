import { Brand } from "../../../../brand/model/brand";
import { BrandCondDTO, BrandUpdateDTO } from "../../../../brand/model/dto";
import { BaseCommandRepositorySequelize, BaseQueryRepositorySequelize, BaseRepositorySequelize } from "../../../../../share/repository/repo-sequelize";
import { Sequelize } from "sequelize";
export declare class MySQLBrandRespository extends BaseRepositorySequelize<Brand, BrandCondDTO, BrandUpdateDTO> {
    constructor(sequelize: Sequelize);
}
export declare class MySQLQueryRepository extends BaseQueryRepositorySequelize<Brand, BrandCondDTO> {
}
export declare class MySQLCommandRepository extends BaseCommandRepositorySequelize<Brand, BrandUpdateDTO> {
}
