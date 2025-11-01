"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateNewBrandCmdHandler = void 0;
const base_model_1 = require("../../../share/model/base-model");
const uuid_1 = require("uuid");
const dto_1 = require("../model/dto");
const errors_1 = require("../model/errors");
class CreateNewBrandCmdHandler {
    repository;
    constructor(repository) {
        this.repository = repository;
    }
    async execute(command) {
        const { success, data: parsedData, error } = dto_1.BrandCreateDTOSchema.safeParse(command.dto);
        if (!success) {
            throw new Error('Invalid data');
        }
        const isExist = await this.repository.findByCond({ name: parsedData.name });
        if (isExist) {
            throw errors_1.ErrBrandNameDuplicate;
        }
        const newId = (0, uuid_1.v7)();
        const newBrand = {
            ...parsedData,
            id: newId,
            status: base_model_1.ModelStatus.ACTIVE,
            createdAt: new Date(),
            updatedAt: new Date(),
        };
        await this.repository.insert(newBrand);
        return newId;
    }
}
exports.CreateNewBrandCmdHandler = CreateNewBrandCmdHandler;
//# sourceMappingURL=create-new-brand.js.map