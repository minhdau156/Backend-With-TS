"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupOrderHexagon = void 0;
const mysql_1 = require("./infras/repository/mysql");
const rpc_1 = require("./infras/repository/rpc");
const config_1 = require("../../share/component/config");
const usecase_1 = require("./usecase");
const http_service_1 = require("./infras/transport/http-service");
const setupOrderHexagon = (sequelize) => {
    (0, mysql_1.init)(sequelize);
    const orderCommandRepository = new mysql_1.OrderCommandRepository(sequelize, mysql_1.modelName);
    const cartQueryRepository = new rpc_1.CartQueryRepository(config_1.config.rpc.cart);
    const orderUseCase = new usecase_1.OrderUseCase(orderCommandRepository, cartQueryRepository);
    const httpService = new http_service_1.OrderHttpService(orderUseCase);
    return httpService.getRoute();
};
exports.setupOrderHexagon = setupOrderHexagon;
//# sourceMappingURL=index.js.map