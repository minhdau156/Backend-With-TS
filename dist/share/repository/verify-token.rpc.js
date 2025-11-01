"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenIntrospectRPCClient = void 0;
const axios_1 = __importDefault(require("axios"));
class TokenIntrospectRPCClient {
    url;
    constructor(url) {
        this.url = url;
    }
    async introspect(token) {
        try {
            const { data } = await axios_1.default.post(`${this.url}`, { token });
            const { sub, role } = data.data;
            return {
                payload: { sub, role },
                isOk: true,
            };
        }
        catch (error) {
            return {
                payload: null,
                error: error,
                isOk: false,
            };
        }
    }
}
exports.TokenIntrospectRPCClient = TokenIntrospectRPCClient;
//# sourceMappingURL=verify-token.rpc.js.map