"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.jwtProvider = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = require("./config");
class JwtTokenService {
    secretKey;
    expiresIn;
    constructor(secretKey, expiresIn) {
        this.secretKey = secretKey;
        this.expiresIn = expiresIn;
    }
    async generateToken(payload) {
        const secretKey = this.secretKey;
        return jsonwebtoken_1.default.sign(payload, secretKey, { expiresIn: this.expiresIn });
    }
    async verifyToken(token) {
        const decoded = jsonwebtoken_1.default.verify(token, this.secretKey);
        return decoded;
    }
}
exports.jwtProvider = new JwtTokenService(config_1.config.accessToken.secretKey, config_1.config.accessToken.expiresIn);
//# sourceMappingURL=jwt.js.map