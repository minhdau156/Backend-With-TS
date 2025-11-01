"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupCartHexagon = setupCartHexagon;
const express_1 = require("express");
const dto_1 = require("./infras/repository/mysql/dto");
const usecase_1 = require("./usecase");
const mysql_1 = require("./infras/repository/mysql");
const http_service_1 = require("./infras/transport/http-service");
const rpc_1 = require("./infras/repository/rpc");
const config_1 = require("../../share/component/config");
function setupCartHexagon(sequelize, sctx) {
    (0, dto_1.init)(sequelize);
    const cartRepository = new mysql_1.CartRepository(sequelize, dto_1.modelName);
    const productRPCRepository = new rpc_1.CartProductRPCRepo(config_1.config.rpc.product);
    const cartUseCase = new usecase_1.CartUseCase(cartRepository, cartRepository, productRPCRepository);
    const cartHttpService = new http_service_1.CartHttpService(cartUseCase, productRPCRepository, cartRepository);
    const router = (0, express_1.Router)();
    const mdlFactory = sctx.mdlFactory;
    router.post("/carts", mdlFactory.auth, cartHttpService.addProductToCartAPI.bind(cartHttpService));
    router.post("/carts/:id", mdlFactory.auth, cartHttpService.removeProductFromCartAPI.bind(cartHttpService));
    router.get("/carts", mdlFactory.auth, cartHttpService.listItemsAPI.bind(cartHttpService));
    router.patch("/carts", mdlFactory.auth, cartHttpService.updateProductQuantitiesAPI.bind(cartHttpService));
    router.post("/rpc/carts/items", cartHttpService.listItemsRPC.bind(cartHttpService));
    return router;
}
//# sourceMappingURL=index.js.map