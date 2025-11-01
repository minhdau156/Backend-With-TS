"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateCartItemDTOSchema = exports.cartItemCondDTOSchema = exports.addCartItemDTOSchema = exports.cartItemSchema = exports.cartProductSchema = void 0;
const zod_1 = __importDefault(require("zod"));
const error_1 = require("./error");
exports.cartProductSchema = zod_1.default.object({
    id: zod_1.default.string(),
    name: zod_1.default.string(),
    images: zod_1.default.array(zod_1.default.string()).nullable(),
    salePrice: zod_1.default.number(),
    price: zod_1.default.number(),
    quantity: zod_1.default.number()
});
exports.cartItemSchema = zod_1.default.object({
    id: zod_1.default.string().uuid(),
    userId: zod_1.default.string().uuid(),
    productId: zod_1.default.string().uuid(),
    attribute: zod_1.default.string().nullable().optional().default(''),
    quantity: zod_1.default.number().min(1, error_1.ErrQuantityMustBePositive.message).default(1),
    product: exports.cartProductSchema.optional(),
});
exports.addCartItemDTOSchema = zod_1.default.object({
    userId: zod_1.default.string().uuid(),
    productId: zod_1.default.string().uuid(),
    attribute: zod_1.default.string().nullable().optional().default(''),
    quantity: zod_1.default.number().min(1).default(1),
});
exports.cartItemCondDTOSchema = zod_1.default.object({
    userId: zod_1.default.string().optional(),
    productId: zod_1.default.string().optional(),
    attribute: zod_1.default.string().nullable().optional().default(''),
});
exports.updateCartItemDTOSchema = zod_1.default.object({
    productId: zod_1.default.string().uuid(),
    attribute: zod_1.default.string().nullable().optional().default(''),
    quantity: zod_1.default.number().int(),
});
//# sourceMappingURL=index.js.map