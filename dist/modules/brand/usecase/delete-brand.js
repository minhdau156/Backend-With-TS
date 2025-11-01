"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteBrandCmdHandler = void 0;
const base_error_1 = require("../../../share/model/base-error");
const base_model_1 = require("../../../share/model/base-model");
class DeleteBrandCmdHandler {
    repository;
    constructor(repository) {
        this.repository = repository;
    }
    async execute(command) {
        const data = await this.repository.get(command.id);
        if (!data || data.status === base_model_1.ModelStatus.DELETED) {
            throw base_error_1.ErrDataNotFound;
        }
        await this.repository.delete(command.id, command.isHardDelete);
        return;
    }
}
exports.DeleteBrandCmdHandler = DeleteBrandCmdHandler;
//# sourceMappingURL=delete-brand.js.map