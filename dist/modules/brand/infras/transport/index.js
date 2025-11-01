"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrandHttpService = void 0;
const paging_1 = require("../../../../share/model/paging");
class BrandHttpService {
    createCmdHandler;
    getDetailQueryHandler;
    updateCmdHandler;
    deleteCmdHandler;
    listQueryHandler;
    constructor(createCmdHandler, getDetailQueryHandler, updateCmdHandler, deleteCmdHandler, listQueryHandler) {
        this.createCmdHandler = createCmdHandler;
        this.getDetailQueryHandler = getDetailQueryHandler;
        this.updateCmdHandler = updateCmdHandler;
        this.deleteCmdHandler = deleteCmdHandler;
        this.listQueryHandler = listQueryHandler;
    }
    async createAPI(req, res) {
        try {
            const cmd = { dto: req.body };
            const result = await this.createCmdHandler.execute(cmd);
            res.status(201).json({ data: result });
        }
        catch (error) {
            res.status(400).json({
                message: error.message,
            });
        }
    }
    async getDetailAPI(req, res) {
        const { id } = req.params;
        try {
            const result = await this.getDetailQueryHandler.query({ id });
            res.status(200).json({ data: result });
        }
        catch (error) {
            res.status(400).json({
                message: error.message,
            });
        }
    }
    async updateAPI(req, res) {
        const { id } = req.params;
        const cmd = { id, dto: req.body };
        await this.updateCmdHandler.execute(cmd);
        res.status(200).json({ data: true });
    }
    async deleteAPI(req, res) {
        const { id } = req.params;
        try {
            await this.deleteCmdHandler.execute({ id, isHardDelete: false });
            res.status(200).json({ data: true });
        }
        catch (error) {
            res.status(400).json({
                message: error.message,
            });
        }
    }
    async listAPI(req, res) {
        const { success, data: paging, error } = paging_1.PagingDTOSchema.safeParse(req.query);
        if (!success) {
            res.status(400).json({
                message: 'Invalid paging',
                error: error.message,
            });
            return;
        }
        const result = await this.listQueryHandler.query({ cond: {}, paging });
        res.status(200).json({ data: result, paging, filter: {} });
    }
    async listByIds(req, res) {
    }
}
exports.BrandHttpService = BrandHttpService;
//# sourceMappingURL=index.js.map