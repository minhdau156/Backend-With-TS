"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.modelName = exports.UserPersistence = void 0;
exports.init = init;
const model_1 = require("../../../../user/model");
const sequelize_1 = require("sequelize");
class UserPersistence extends sequelize_1.Model {
}
exports.UserPersistence = UserPersistence;
exports.modelName = 'User';
function init(sequelize) {
    UserPersistence.init({
        id: {
            type: sequelize_1.DataTypes.UUID,
            primaryKey: true,
        },
        firstName: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
            field: 'first_name'
        },
        lastName: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
            field: 'last_name'
        },
        email: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        password: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false
        },
        salt: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false
        },
        phone: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: true
        },
        address: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: true
        },
        status: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
            defaultValue: model_1.Status.ACTIVE
        },
        avatar: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: true
        },
        gender: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: true,
            defaultValue: model_1.Gender.UNKNOWN
        },
        role: {
            type: sequelize_1.DataTypes.STRING,
            defaultValue: model_1.Role.USER
        },
        birthday: {
            type: sequelize_1.DataTypes.DATE,
            allowNull: true
        }
    }, {
        sequelize,
        modelName: exports.modelName,
        timestamps: true,
        createdAt: "created_at",
        updatedAt: "updated_at",
        tableName: 'users'
    });
}
//# sourceMappingURL=dto.js.map