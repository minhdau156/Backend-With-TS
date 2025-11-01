"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupMiddlewares = void 0;
const auth_1 = require("./auth");
const check_role_1 = require("./check-role");
const setupMiddlewares = (introspector) => {
    const auth = (0, auth_1.authMiddleware)(introspector);
    return {
        auth,
        allowRoles: check_role_1.allowRoles,
    };
};
exports.setupMiddlewares = setupMiddlewares;
//# sourceMappingURL=index.js.map