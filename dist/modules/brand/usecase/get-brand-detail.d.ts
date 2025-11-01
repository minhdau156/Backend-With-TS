import { IQueryHandler, IQueryRepository } from "../../../share/interface";
import { GetDetailQuery } from "../interface";
import { Brand } from "../model/brand";
import { BrandCondDTO } from "../model/dto";
export declare class GetBrandDetailQuery implements IQueryHandler<GetDetailQuery, Brand> {
    private readonly repository;
    constructor(repository: IQueryRepository<Brand, BrandCondDTO>);
    query(query: GetDetailQuery): Promise<Brand>;
}
