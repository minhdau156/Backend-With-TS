"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartProductRPCRepo = void 0;
const axios_1 = __importDefault(require("axios"));
class CartProductRPCRepo {
    productServiceUrl;
    constructor(productServiceUrl) {
        this.productServiceUrl = productServiceUrl;
    }
    async findById(id) {
        try {
            const { data } = await axios_1.default.get(`${this.productServiceUrl}/v1/products/${id}`);
            const product = data.data;
            return {
                id: product.id,
                name: product.name,
                price: product.price,
                salePrice: product.salePrice,
                images: product.images,
                quantity: product.quantity,
            };
        }
        catch (error) {
            return null;
        }
    }
    async findByIds(ids) {
        const { data } = await axios_1.default.post(`${this.productServiceUrl}/v1/rpc/products/by-ids`, { ids });
        const products = data.data;
        return products.map((product) => ({
            id: product.id,
            name: product.name,
            price: product.price,
            salePrice: product.salePrice,
            images: product.images,
            quantity: product.quantity,
        }));
    }
}
exports.CartProductRPCRepo = CartProductRPCRepo;
//# sourceMappingURL=index.js.map