import { ICommandRepository, IQueryRepository, IRepository } from "../interface";
import { PagingDTO } from "../model/paging";
import { Sequelize } from "sequelize";
export declare abstract class BaseRepositorySequelize<Entity, Cond, UpdateDTO> implements IRepository<Entity, Cond, UpdateDTO> {
    readonly queryRepo: IQueryRepository<Entity, Cond>;
    readonly cmdRepo: ICommandRepository<Entity, UpdateDTO>;
    constructor(queryRepo: IQueryRepository<Entity, Cond>, cmdRepo: ICommandRepository<Entity, UpdateDTO>);
    listByIds(ids: string[]): Promise<Entity[]>;
    get(id: string): Promise<Entity | null>;
    findByCond(cond: Cond): Promise<Entity | null>;
    list(cond: Cond, paging: PagingDTO): Promise<Array<Entity>>;
    insert(data: Entity): Promise<boolean>;
    update(id: string, data: UpdateDTO): Promise<boolean>;
    delete(id: string, isHard: boolean): Promise<boolean>;
}
export declare abstract class BaseQueryRepositorySequelize<Entity, Cond> implements IQueryRepository<Entity, Cond> {
    readonly sequelize: Sequelize;
    readonly modelName: string;
    constructor(sequelize: Sequelize, modelName: string);
    listByIds(ids: string[]): Promise<Entity[]>;
    get(id: string): Promise<Entity | null>;
    findByCond(cond: Cond): Promise<Entity | null>;
    list(cond: Cond, paging: PagingDTO): Promise<Array<Entity>>;
}
export declare abstract class BaseCommandRepositorySequelize<Entity, UpdateDTO> implements ICommandRepository<Entity, UpdateDTO> {
    readonly sequelize: Sequelize;
    readonly modelName: string;
    constructor(sequelize: Sequelize, modelName: string);
    insert(data: Entity): Promise<boolean>;
    update(id: string, data: UpdateDTO): Promise<boolean>;
    delete(id: string, isHard?: boolean): Promise<boolean>;
}
