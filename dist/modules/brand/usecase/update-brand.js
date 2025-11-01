"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateBrandCmdHandler = void 0;
const base_error_1 = require("../../../share/model/base-error");
const base_model_1 = require("../../../share/model/base-model");
const dto_1 = require("../model/dto");
class UpdateBrandCmdHandler {
    repository;
    constructor(repository) {
        this.repository = repository;
    }
    async execute(command) {
        const { success, data: parsedData, error } = dto_1.BrandUpdateDTOSchema.safeParse(command.dto);
        if (!success) {
            throw new Error('Invalid data');
        }
        const data = await this.repository.get(command.id);
        if (!data || data.status === base_model_1.ModelStatus.DELETED) {
            throw base_error_1.ErrDataNotFound;
        }
        await this.repository.update(command.id, parsedData);
        return;
    }
}
exports.UpdateBrandCmdHandler = UpdateBrandCmdHandler;
//# sourceMappingURL=update-brand.js.map