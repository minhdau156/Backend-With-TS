"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.modelName = exports.BrandPersistence = exports.CategoryPersistence = exports.ProductPersistence = void 0;
exports.init = init;
const product_1 = require("../../../../product/model/product");
const base_model_1 = require("../../../../../share/model/base-model");
const sequelize_1 = require("sequelize");
class ProductPersistence extends sequelize_1.Model {
}
exports.ProductPersistence = ProductPersistence;
class CategoryPersistence extends sequelize_1.Model {
}
exports.CategoryPersistence = CategoryPersistence;
class BrandPersistence extends sequelize_1.Model {
}
exports.BrandPersistence = BrandPersistence;
exports.modelName = "Product";
function init(sequelize) {
    ProductPersistence.init({
        id: {
            type: sequelize_1.DataTypes.STRING,
            primaryKey: true,
        },
        name: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false
        },
        images: {
            type: sequelize_1.DataTypes.JSON,
            allowNull: true
        },
        price: {
            type: sequelize_1.DataTypes.DECIMAL(10, 2),
            allowNull: false
        },
        salePrice: {
            type: sequelize_1.DataTypes.DECIMAL(10, 2),
            field: 'sale_price',
            allowNull: false
        },
        quantity: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        },
        brandId: {
            type: sequelize_1.DataTypes.UUID,
            allowNull: false,
            field: 'brand_id'
        },
        categoryId: {
            type: sequelize_1.DataTypes.UUID,
            allowNull: false,
            field: 'category_id'
        },
        description: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: true
        },
        content: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: true
        },
        gender: {
            type: sequelize_1.DataTypes.STRING,
            defaultValue: product_1.ProductGender.UNISEX
        },
        colors: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: true
        },
        status: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
            defaultValue: base_model_1.ModelStatus.ACTIVE
        },
    }, {
        sequelize,
        modelName: exports.modelName,
        timestamps: true,
        createdAt: "created_at",
        updatedAt: "updated_at",
        tableName: 'products'
    });
}
//# sourceMappingURL=dto.js.map