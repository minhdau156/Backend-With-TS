"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderCommandRepository = exports.modelName = exports.OrderItemPersistence = exports.OrderPersistence = void 0;
exports.init = init;
const sequelize_1 = require("sequelize");
class OrderPersistence extends sequelize_1.Model {
}
exports.OrderPersistence = OrderPersistence;
class OrderItemPersistence extends sequelize_1.Model {
}
exports.OrderItemPersistence = OrderItemPersistence;
exports.modelName = "Order";
function init(sequelize) {
    OrderPersistence.init({
        id: {
            type: sequelize_1.DataTypes.STRING,
            primaryKey: true
        },
        userId: {
            type: sequelize_1.DataTypes.STRING,
            field: "user_id"
        },
        shippingAddress: {
            type: sequelize_1.DataTypes.STRING,
            field: "shipping_address"
        },
        shippingCity: {
            type: sequelize_1.DataTypes.STRING,
            field: "shipping_city"
        },
        recipientFirstName: {
            type: sequelize_1.DataTypes.STRING,
            field: "recipient_first_name"
        },
        recipientLastName: {
            type: sequelize_1.DataTypes.STRING,
            field: "recipient_last_name"
        },
        recipientPhone: {
            type: sequelize_1.DataTypes.STRING,
            field: "recipient_phone"
        },
        recipientEmail: {
            type: sequelize_1.DataTypes.STRING,
            field: "recipient_email"
        },
        shippingMethod: {
            type: sequelize_1.DataTypes.ENUM('free', 'standard'),
            field: 'shipping_method'
        },
        paymentMethod: {
            type: sequelize_1.DataTypes.ENUM('cod', 'zalo'),
            field: 'payment_method'
        },
        paymentStatus: {
            type: sequelize_1.DataTypes.ENUM('pending', 'paid', 'failed'),
            field: 'payment_status'
        },
        status: {
            type: sequelize_1.DataTypes.ENUM('pending', 'confirmed', 'processing', 'shipping', 'delivered', 'completed', 'canceled', 'refunded', 'deleted')
        }
    }, {
        sequelize,
        modelName: exports.modelName,
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        tableName: 'orders'
    });
    OrderItemPersistence.init({
        id: {
            type: sequelize_1.DataTypes.STRING,
            primaryKey: true
        },
        orderId: {
            type: sequelize_1.DataTypes.STRING,
            field: "order_id"
        },
        productId: {
            type: sequelize_1.DataTypes.STRING,
            field: "product_id"
        },
        name: {
            type: sequelize_1.DataTypes.STRING
        },
        attribute: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: true
        },
        image: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: true
        },
        price: {
            type: sequelize_1.DataTypes.NUMBER
        },
        quantity: {
            type: sequelize_1.DataTypes.INTEGER
        }
    }, {
        sequelize,
        modelName: 'OrderItem',
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        tableName: 'order_items'
    });
    OrderPersistence.hasMany(OrderItemPersistence, { foreignKey: { field: 'order_id' }, as: 'items' });
}
class OrderCommandRepository {
    sequelize;
    modelName;
    constructor(sequelize, modelName) {
        this.sequelize = sequelize;
        this.modelName = modelName;
    }
    async insert(data) {
        await this.sequelize.transaction(async (t) => {
            await OrderPersistence.create(data, { transaction: t });
            await OrderItemPersistence.bulkCreate(data.items, { transaction: t });
            return;
        });
    }
    update(id, data) {
        throw new Error("Method not implemented.");
    }
    delete(id, isHard) {
        throw new Error("Method not implemented.");
    }
}
exports.OrderCommandRepository = OrderCommandRepository;
//# sourceMappingURL=index.js.map