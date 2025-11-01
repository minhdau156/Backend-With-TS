"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderUseCase = void 0;
const model_1 = require("../model");
const uuid_1 = require("uuid");
const util_1 = require("../../../share/util");
class OrderUseCase {
    orderCommandRepo;
    cartQueryRepo;
    constructor(orderCommandRepo, cartQueryRepo) {
        this.orderCommandRepo = orderCommandRepo;
        this.cartQueryRepo = cartQueryRepo;
    }
    async makeOrder(requester, data) {
        const { sub: userId } = requester;
        data = model_1.orderCreateDTOSchema.parse(data);
        const cartItems = await this.cartQueryRepo.listItems(userId);
        const trackingNumber = (0, util_1.generateRandomString)(6);
        const orderItems = cartItems.map(item => ({
            id: (0, uuid_1.v7)(),
            orderId: newId,
            productId: item.productId,
            name: item.product.name,
            attribute: item.attribute ?? '',
            price: item.product.salePrice,
            quantity: item.quantity,
        }));
        const newId = (0, uuid_1.v7)();
        const order = {
            id: newId,
            userId,
            ...data,
            status: model_1.OrderStatus.PENDING,
            paymentStatus: model_1.PaymentStatus.PENDING,
            trackingNumber,
            items: orderItems,
            createdAt: new Date(),
            updatedAt: new Date(),
        };
        await this.orderCommandRepo.insert(order);
        return newId;
    }
    updateOrder(requester, id, data) {
        throw new Error("Method not implemented.");
    }
    deleteOrder(requester, id, isHard) {
        throw new Error("Method not implemented.");
    }
}
exports.OrderUseCase = OrderUseCase;
//# sourceMappingURL=index.js.map