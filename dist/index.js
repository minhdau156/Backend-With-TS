"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("module-alias/register");
const brand_1 = require("./modules/brand");
const category_1 = require("./modules/category");
const product_1 = require("./modules/product");
const sequelize_1 = require("./share/component/sequelize");
const express_1 = __importDefault(require("express"));
const user_1 = require("./modules/user");
const verify_token_rpc_1 = require("./share/repository/verify-token.rpc");
const middleware_1 = require("./share/middleware");
const cart_1 = require("./modules/cart");
const order_1 = require("./modules/order");
(async () => {
    await sequelize_1.sequelize.authenticate();
    console.log('Connection has been established successfully.');
    const app = (0, express_1.default)();
    const port = process.env.PORT || 3000;
    app.use(express_1.default.json());
    app.get('/', (req, res) => {
        res.send('Hello 200Lab!');
    });
    const introspector = new verify_token_rpc_1.TokenIntrospectRPCClient(process.env.VERIFY_TOKEN_URL || 'http://localhost:3000/v1/rpc/introspect');
    const sctx = { mdlFactory: (0, middleware_1.setupMiddlewares)(introspector) };
    app.use('/v1', (0, category_1.setupCategoryHexagon)(sequelize_1.sequelize));
    app.use('/v1', (0, brand_1.setupBrandHexagon)(sequelize_1.sequelize));
    app.use('/v1', (0, product_1.setupProductHexagon)(sequelize_1.sequelize));
    app.use('/v1', (0, user_1.setupUserHexagon)(sequelize_1.sequelize, sctx));
    app.use('/v1', (0, cart_1.setupCartHexagon)(sequelize_1.sequelize, sctx));
    app.use('/v1', (0, order_1.setupOrderHexagon)(sequelize_1.sequelize));
    app.listen(port, () => {
        console.log(`Server is running on http://localhost:${port}`);
    });
})();
//# sourceMappingURL=index.js.map