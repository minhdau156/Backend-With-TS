import { IBrandQueryRepository, ICategoryQueryRepository } from "../../../../product/interface";
import { ProductBrand, ProductCategory } from "../../../../product/model/product";
export declare class RPCProductBrandRepository implements IBrandQueryRepository {
    private readonly baseUrl;
    constructor(baseUrl: string);
    get(id: string): Promise<ProductBrand | null>;
}
export declare class RPCProductCategoryRepository implements ICategoryQueryRepository {
    private readonly baseUrl;
    constructor(baseUrl: string);
    get(id: string): Promise<ProductCategory | null>;
}
export declare class ProxyProductBrandRepository implements IBrandQueryRepository {
    private readonly origin;
    constructor(origin: IBrandQueryRepository);
    private cached;
    get(id: string): Promise<ProductBrand | null>;
}
