"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupBrandHexagon = void 0;
const express_1 = require("express");
const sequelize_1 = require("./infras/repository/sequelize");
const dto_1 = require("./infras/repository/sequelize/dto");
const transport_1 = require("./infras/transport");
const create_new_brand_1 = require("./usecase/create-new-brand");
const delete_brand_1 = require("./usecase/delete-brand");
const get_brand_detail_1 = require("./usecase/get-brand-detail");
const list_brand_1 = require("./usecase/list-brand");
const update_brand_1 = require("./usecase/update-brand");
const setupBrandHexagon = (sequelize) => {
    (0, dto_1.init)(sequelize);
    const repository = new sequelize_1.MySQLBrandRespository(sequelize);
    const createCmdHandler = new create_new_brand_1.CreateNewBrandCmdHandler(repository);
    const getDetailQueryHandler = new get_brand_detail_1.GetBrandDetailQuery(repository);
    const updateCmdHandler = new update_brand_1.UpdateBrandCmdHandler(repository);
    const deleteCmdHandler = new delete_brand_1.DeleteBrandCmdHandler(repository);
    const listQueryHandler = new list_brand_1.ListBrandQuery(repository);
    const httpService = new transport_1.BrandHttpService(createCmdHandler, getDetailQueryHandler, updateCmdHandler, deleteCmdHandler, listQueryHandler);
    const router = (0, express_1.Router)();
    router.post('/brands', httpService.createAPI.bind(httpService));
    router.get('/brands/:id', httpService.getDetailAPI.bind(httpService));
    router.get('/brands', httpService.listAPI.bind(httpService));
    router.patch('/brands/:id', httpService.updateAPI.bind(httpService));
    router.delete('/brands/:id', httpService.deleteAPI.bind(httpService));
    router.post('/rpc/brands', (req, res) => {
        const { ids } = req.body;
    });
    return router;
};
exports.setupBrandHexagon = setupBrandHexagon;
//# sourceMappingURL=index.js.map