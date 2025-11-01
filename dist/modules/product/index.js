"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupProductHexagon = setupProductHexagon;
const config_1 = require("../../share/component/config");
const express_1 = require("express");
const dto_1 = require("./insfra/repository/mysql/dto");
const mysql_repo_1 = require("./insfra/repository/mysql/mysql-repo");
const rpc_1 = require("./insfra/repository/rpc");
const http_service_1 = require("./insfra/transport/http-service");
const usecase_1 = require("./usecase");
function setupProductHexagon(sequelize) {
    (0, dto_1.init)(sequelize);
    const productRepository = new mysql_repo_1.MySQLProductRepository(sequelize, dto_1.modelName);
    const productBrandRepository = new rpc_1.ProxyProductBrandRepository(new rpc_1.RPCProductBrandRepository(config_1.config.rpc.productBrand));
    const productCategoryRepository = new rpc_1.RPCProductCategoryRepository(config_1.config.rpc.productCategory);
    const productUseCase = new usecase_1.ProductUseCase(productRepository, productBrandRepository, productCategoryRepository);
    const productHttpService = new http_service_1.ProductHTTPService(productUseCase, productBrandRepository, productCategoryRepository, productRepository);
    const router = (0, express_1.Router)();
    router.post('/products', productHttpService.createAPI.bind(productHttpService));
    router.get('/products/:id', productHttpService.getDetailAPI.bind(productHttpService));
    router.get('/products', productHttpService.listAPI.bind(productHttpService));
    router.patch('/products/:id', productHttpService.updateAPI.bind(productHttpService));
    router.delete('/products/:id', productHttpService.deleteAPI.bind(productHttpService));
    router.post('/rpc/products/by-ids', productHttpService.listProductByIdsAPI.bind(productHttpService));
    return router;
}
//# sourceMappingURL=index.js.map