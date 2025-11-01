"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.modelName = exports.BrandPersistence = void 0;
exports.init = init;
const sequelize_1 = require("sequelize");
class BrandPersistence extends sequelize_1.Model {
}
exports.BrandPersistence = BrandPersistence;
exports.modelName = "Brand";
function init(sequelize) {
    BrandPersistence.init({
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
        tagLine: {
            type: sequelize_1.DataTypes.STRING,
            field: "tag_line",
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
        tableName: "brands",
    });
}
//# sourceMappingURL=dto.js.map