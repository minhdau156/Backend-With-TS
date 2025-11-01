"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderUpdateDTOSchema = exports.orderCreateDTOSchema = exports.orderCondDTOSchema = exports.orderSchema = exports.orderItemSchema = exports.PaymentStatus = exports.ShippingMethod = exports.PaymentMethod = exports.OrderStatus = void 0;
const zod_1 = require("zod");
var OrderStatus;
(function (OrderStatus) {
    OrderStatus["PENDING"] = "pending";
    OrderStatus["CONFIRMED"] = "confirmed";
    OrderStatus["PROCESSING"] = "processing";
    OrderStatus["SHIPPING"] = "shipping";
    OrderStatus["DELIVERED"] = "delivered";
    OrderStatus["COMPLETED"] = "completed";
    OrderStatus["CANCELED"] = "canceled";
    OrderStatus["REFUNDED"] = "refunded";
    OrderStatus["DELETED"] = "deleted";
})(OrderStatus || (exports.OrderStatus = OrderStatus = {}));
var PaymentMethod;
(function (PaymentMethod) {
    PaymentMethod["COD"] = "cod";
    PaymentMethod["ZALO"] = "zalo";
})(PaymentMethod || (exports.PaymentMethod = PaymentMethod = {}));
var ShippingMethod;
(function (ShippingMethod) {
    ShippingMethod["FREE"] = "free";
    ShippingMethod["STANDARD"] = "standard";
})(ShippingMethod || (exports.ShippingMethod = ShippingMethod = {}));
var PaymentStatus;
(function (PaymentStatus) {
    PaymentStatus["PENDING"] = "pending";
    PaymentStatus["PAID"] = "paid";
    PaymentStatus["FAILED"] = "failed";
})(PaymentStatus || (exports.PaymentStatus = PaymentStatus = {}));
exports.orderItemSchema = zod_1.z.object({
    id: zod_1.z.string().uuid(),
    orderId: zod_1.z.string().uuid(),
    productId: zod_1.z.string().uuid(),
    name: zod_1.z.string(),
    attribute: zod_1.z.string(),
    price: zod_1.z.number(),
    quantity: zod_1.z.number(),
});
exports.orderSchema = zod_1.z.object({
    id: zod_1.z.string().uuid(),
    userId: zod_1.z.string().uuid(),
    shippingAddress: zod_1.z.string().min(5),
    shippingCity: zod_1.z.string().optional(),
    recipientFirstName: zod_1.z.string(),
    recipientLastName: zod_1.z.string(),
    recipientPhone: zod_1.z.string().optional(),
    recipientEmail: zod_1.z.string().email().optional(),
    shippingMethod: zod_1.z.nativeEnum(ShippingMethod),
    paymentMethod: zod_1.z.nativeEnum(PaymentMethod),
    paymentStatus: zod_1.z.nativeEnum(PaymentStatus),
    trackingNumber: zod_1.z.string(),
    status: zod_1.z.nativeEnum(OrderStatus),
    items: zod_1.z.array(exports.orderItemSchema),
    createdAt: zod_1.z.date(),
    updatedAt: zod_1.z.date(),
});
exports.orderCondDTOSchema = exports.orderSchema
    .pick({
    userId: true,
    shippingMethod: true,
    paymentMethod: true,
    trackingStatus: true,
    paymentStatus: true,
    status: true,
})
    .partial();
exports.orderCreateDTOSchema = exports.orderSchema.pick({
    shippingAddress: true,
    shippingCity: true,
    recipientFirstName: true,
    recipientLastName: true,
    recipientPhone: true,
    recipientEmail: true,
    shippingMethod: true,
    paymentMethod: true,
});
exports.orderUpdateDTOSchema = exports.orderSchema
    .pick({
    paymentMethod: true,
    paymentStatus: true,
    status: true,
    shippingAddress: true,
    shippingCity: true,
    recipientFirstName: true,
    recipientLastName: true,
    recipientPhone: true,
    recipientEmail: true,
    shippingMethod: true,
})
    .partial();
//# sourceMappingURL=index.js.map