"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProxyProductBrandRepository = exports.RPCProductCategoryRepository = exports.RPCProductBrandRepository = void 0;
const product_1 = require("../../../../product/model/product");
const axios_1 = __importDefault(require("axios"));
class RPCProductBrandRepository {
    baseUrl;
    constructor(baseUrl) {
        this.baseUrl = baseUrl;
    }
    async get(id) {
        try {
            const { data } = await axios_1.default.get(`${this.baseUrl}/v1/brands/${id}`);
            const brand = product_1.ProductBrandSchema.parse(data.data);
            return brand;
        }
        catch (error) {
            console.error(error);
            return null;
        }
    }
}
exports.RPCProductBrandRepository = RPCProductBrandRepository;
class RPCProductCategoryRepository {
    baseUrl;
    constructor(baseUrl) {
        this.baseUrl = baseUrl;
    }
    async get(id) {
        try {
            const { data } = await axios_1.default.get(`${this.baseUrl}/v1/categories/${id}`);
            const category = product_1.ProductCategorySchema.parse(data.data);
            return category;
        }
        catch (error) {
            console.error(error);
            return null;
        }
    }
}
exports.RPCProductCategoryRepository = RPCProductCategoryRepository;
class ProxyProductBrandRepository {
    origin;
    constructor(origin) {
        this.origin = origin;
    }
    cached = {};
    async get(id) {
        try {
            if (this.cached[id]) {
                return this.cached[id];
            }
            const brand = await this.origin.get(id);
            if (brand) {
                this.cached[id] = brand;
            }
            return brand;
        }
        catch (error) {
            console.error(error);
            return null;
        }
    }
}
exports.ProxyProductBrandRepository = ProxyProductBrandRepository;
//# sourceMappingURL=index.js.map