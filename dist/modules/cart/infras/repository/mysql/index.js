"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartRepository = void 0;
class CartRepository {
    sequelize;
    modelName;
    constructor(sequelize, modelName) {
        this.sequelize = sequelize;
        this.modelName = modelName;
    }
    async get(id) {
        const result = await this.sequelize.models[this.modelName].findByPk(id);
        if (!result) {
            return null;
        }
        const persistenceData = result.get({ plain: true });
        const { created_at, updated_at, ...props } = persistenceData;
        return { ...props, createdAt: persistenceData.created_at, updatedAt: persistenceData.updated_at };
    }
    async listItems(userId) {
        const items = await this.sequelize.models[this.modelName].findAll({ where: { userId } });
        return items.map((row) => {
            const persistenceData = row.get({ plain: true });
            const { created_at, updated_at, ...props } = persistenceData;
            return {
                ...props,
                createdAt: persistenceData.created_at,
                updatedAt: persistenceData.updated_at,
            };
        });
    }
    async findByCond(cond) {
        const result = await this.sequelize.models[this.modelName].findOne({ where: cond });
        if (!result) {
            return null;
        }
        const persistenceData = result.get({ plain: true });
        const { created_at, updated_at, ...props } = persistenceData;
        return { ...props, createdAt: persistenceData.created_at, updatedAt: persistenceData.updated_at };
    }
    async insert(data) {
        await this.sequelize.models[this.modelName].create(data);
        return true;
    }
    async update(id, data) {
        await this.sequelize.models[this.modelName].update(data, { where: { id } });
        return true;
    }
    async remove(id, isHard) {
        await this.sequelize.models[this.modelName].destroy({ where: { id } });
        return true;
    }
    async updateMany(dtos, userId) {
        await this.sequelize.transaction(async (t) => {
            for (let i = 0; i < dtos.length; i++) {
                const { productId, quantity, attribute } = dtos[i];
                await this.sequelize.models[this.modelName].update({ quantity }, { where: { userId, productId, attribute }, transaction: t });
            }
            return true;
        });
        return true;
    }
}
exports.CartRepository = CartRepository;
//# sourceMappingURL=index.js.map