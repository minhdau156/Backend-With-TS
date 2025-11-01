"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartQueryRepository = void 0;
const axios_1 = __importDefault(require("axios"));
class CartQueryRepository {
    cartServiceUrl;
    constructor(cartServiceUrl) {
        this.cartServiceUrl = cartServiceUrl;
    }
    async listItems(userId) {
        const { data } = await axios_1.default.post(`${this.cartServiceUrl}/v1/rpc/carts/items`, { userId });
        return data.data;
    }
    clearItems(userId) {
        throw new Error("Method not implemented.");
    }
}
exports.CartQueryRepository = CartQueryRepository;
//# sourceMappingURL=index.js.map