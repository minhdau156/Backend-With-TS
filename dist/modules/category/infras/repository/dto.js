"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.modelName = exports.CategoryPersistence = void 0;
exports.init = init;
const sequelize_1 = require("sequelize");
class CategoryPersistence extends sequelize_1.Model {
}
exports.CategoryPersistence = CategoryPersistence;
exports.modelName = "Category";
function init(sequelize) {
    CategoryPersistence.init({
        id: {
            type: sequelize_1.DataTypes.STRING,
            primaryKey: true,
        },
        name: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        image: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: true,
        },
        parentId: {
            type: sequelize_1.DataTypes.STRING,
            field: "parent_id",
            allowNull: true,
        },
        description: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: true,
        },
        status: {
            type: sequelize_1.DataTypes.ENUM("active", "inactive", "deleted"),
            allowNull: false,
            defaultValue: "active",
        },
    }, {
        sequelize,
        modelName: exports.modelName,
        timestamps: true,
        createdAt: "created_at",
        updatedAt: "updated_at",
        tableName: "categories",
    });
}
//# sourceMappingURL=dto.js.map