import { IQueryHandler, IQueryRepository } from "../../../share/interface";
import { ListQuery } from "../interface";
import { Brand } from "../model/brand";
import { BrandCondDTO } from "../model/dto";
export declare class ListBrandQuery implements IQueryHandler<ListQuery, Brand[]> {
    private readonly repository;
    constructor(repository: IQueryRepository<Brand, BrandCondDTO>);
    query(query: ListQuery): Promise<Brand[]>;
}
