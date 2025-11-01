"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseCommandRepositorySequelize = exports.BaseQueryRepositorySequelize = exports.BaseRepositorySequelize = void 0;
const base_model_1 = require("../model/base-model");
const sequelize_1 = require("sequelize");
class BaseRepositorySequelize {
    queryRepo;
    cmdRepo;
    constructor(queryRepo, cmdRepo) {
        this.queryRepo = queryRepo;
        this.cmdRepo = cmdRepo;
    }
    async listByIds(ids) {
        return await this.queryRepo.listByIds(ids);
    }
    async get(id) {
        return await this.queryRepo.get(id);
    }
    async findByCond(cond) {
        return await this.queryRepo.findByCond(cond);
    }
    async list(cond, paging) {
        return await this.queryRepo.list(cond, paging);
    }
    async insert(data) {
        return await this.cmdRepo.insert(data);
    }
    async update(id, data) {
        return await this.cmdRepo.update(id, data);
    }
    async delete(id, isHard) {
        return await this.cmdRepo.delete(id, isHard);
    }
}
exports.BaseRepositorySequelize = BaseRepositorySequelize;
class BaseQueryRepositorySequelize {
    sequelize;
    modelName;
    constructor(sequelize, modelName) {
        this.sequelize = sequelize;
        this.modelName = modelName;
    }
    async listByIds(ids) {
        const rows = await this.sequelize.models[this.modelName].findAll({ where: { id: { [sequelize_1.Op.in]: ids } } });
        return rows.map((row) => {
            const persistenceData = row.get({ plain: true });
            const { created_at, updated_at, ...props } = persistenceData;
            return {
                ...props,
                createdAt: persistenceData.created_at,
                updatedAt: persistenceData.updated_at,
            };
        });
    }
    async get(id) {
        const data = await this.sequelize.models[this.modelName].findByPk(id);
        if (!data) {
            return null;
        }
        const persistenceData = data.get({ plain: true });
        const { created_at, updated_at, ...props } = persistenceData;
        return {
            ...props,
            createdAt: persistenceData.created_at,
            updatedAt: persistenceData.updated_at,
        };
    }
    async findByCond(cond) {
        const data = await this.sequelize.models[this.modelName].findOne({ where: cond });
        if (!data) {
            return null;
        }
        const persistenceData = data.get({ plain: true });
        return persistenceData;
    }
    async list(cond, paging) {
        const { page, limit } = paging;
        const condSQL = { ...cond, status: { [sequelize_1.Op.ne]: base_model_1.ModelStatus.DELETED } };
        const total = await this.sequelize.models[this.modelName].count({ where: condSQL });
        paging.total = total;
        const rows = await this.sequelize.models[this.modelName].findAll({ where: condSQL, limit, offset: (page - 1) * limit, order: [['id', 'DESC']] });
        return rows.map((row) => row.get({ plain: true }));
    }
}
exports.BaseQueryRepositorySequelize = BaseQueryRepositorySequelize;
class BaseCommandRepositorySequelize {
    sequelize;
    modelName;
    constructor(sequelize, modelName) {
        this.sequelize = sequelize;
        this.modelName = modelName;
    }
    async insert(data) {
        await this.sequelize.models[this.modelName].create(data);
        return true;
    }
    async update(id, data) {
        await this.sequelize.models[this.modelName].update(data, { where: { id } });
        return true;
    }
    async delete(id, isHard = false) {
        if (!isHard) {
            await this.sequelize.models[this.modelName].update({ status: base_model_1.ModelStatus.DELETED }, { where: { id } });
        }
        else {
            await this.sequelize.models[this.modelName].destroy({ where: { id } });
        }
        return true;
    }
}
exports.BaseCommandRepositorySequelize = BaseCommandRepositorySequelize;
//# sourceMappingURL=repo-sequelize.js.map