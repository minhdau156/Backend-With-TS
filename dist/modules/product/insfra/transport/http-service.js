"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductHTTPService = void 0;
const http_server_1 = require("../../../../share/transport/http-server");
class ProductHTTPService extends http_server_1.BaseHttpService {
    productBrandRepository;
    productCategoryRepository;
    productQueryRepo;
    constructor(useCase, productBrandRepository, productCategoryRepository, productQueryRepo) {
        super(useCase);
        this.productBrandRepository = productBrandRepository;
        this.productCategoryRepository = productCategoryRepository;
        this.productQueryRepo = productQueryRepo;
    }
    async getDetailAPI(req, res) {
        try {
            const { id } = req.params;
            const result = await this.useCase.getDetail(id);
            const brand = await this.productBrandRepository.get(result.brandId);
            if (brand) {
                result.brand = brand;
            }
            const category = await this.productCategoryRepository.get(result.categoryId);
            if (category) {
                result.category = category;
            }
            res.status(200).json({ data: result });
        }
        catch (error) {
            res.status(400).json({
                message: error.message,
            });
        }
    }
    async listProductByIdsAPI(req, res) {
        const { ids } = req.body;
        const result = await this.productQueryRepo.listByIds(ids);
        res.status(200).json({ data: result });
    }
}
exports.ProductHTTPService = ProductHTTPService;
//# sourceMappingURL=http-service.js.map