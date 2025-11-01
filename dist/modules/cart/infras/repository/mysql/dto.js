"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.modelName = exports.CartItemPersistence = void 0;
exports.init = init;
const sequelize_1 = require("sequelize");
class CartItemPersistence extends sequelize_1.Model {
}
exports.CartItemPersistence = CartItemPersistence;
exports.modelName = "Cart";
function init(sequelize) {
    CartItemPersistence.init({
        id: {
            type: sequelize_1.DataTypes.STRING,
            primaryKey: true,
        },
        userId: {
            type: sequelize_1.DataTypes.STRING,
            field: "user_id",
        },
        productId: {
            type: sequelize_1.DataTypes.STRING,
            field: "product_id",
        },
        attribute: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: true,
            defaultValue: "",
        },
        quantity: {
            type: sequelize_1.DataTypes.NUMBER,
            defaultValue: 1,
        },
    }, {
        sequelize,
        modelName: exports.modelName,
        timestamps: true,
        createdAt: "created_at",
        updatedAt: "updated_at",
        tableName: "carts",
    });
}
//# sourceMappingURL=dto.js.map