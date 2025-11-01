"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.config = {
    rpc: {
        productBrand: process.env.RPC_PRODUCT_BRAND_URL || "http://localhost:3000",
        productCategory: process.env.RPC_PRODUCT_CATEGORY_URL || "http://localhost:3000",
        product: process.env.RPC_PRODUCT_URL || "http://localhost:3000",
        cart: process.env.RPC_CART_URL || "http://localhost:3000",
    },
    mysql: {
        database: process.env.DB_NAME || "",
        username: process.env.DB_USERNAME || "",
        password: process.env.DB_PASSWORD || "",
        host: process.env.DB_HOST || "",
        port: parseInt(process.env.DB_PORT),
        dialect: "mysql",
        pool: {
            max: 20,
            min: 2,
            acquire: 30000,
            idle: 60000,
        },
        logging: true,
    },
    accessToken: {
        secretKey: process.env.JWT_SECRET_KEY || "200L@b.io",
        expiresIn: "7d",
    },
    redis: {
        host: process.env.REDIS_HOST || "localhost",
        port: parseInt(process.env.REDIS_PORT) || 6380,
        url: process.env.REDIS_URL || "redis://localhost:6380/0",
    },
};
//# sourceMappingURL=config.js.map