"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserHTTPService = void 0;
const jwt_1 = require("../../../../share/component/jwt");
const http_server_1 = require("../../../../share/transport/http-server");
class UserHTTPService extends http_server_1.BaseHttpService {
    usecase;
    constructor(usecase) {
        super(usecase);
        this.usecase = usecase;
    }
    async registerAPI(req, res) {
        await this.createAPI(req, res);
    }
    async loginAPI(req, res) {
        const token = await this.usecase.login(req.body);
        res.status(200).json({ data: token });
    }
    async profileAPI(req, res) {
        try {
            const token = req.headers.authorization?.split(' ')[1];
            if (!token) {
                res.status(401).json({ error: 'Unauthorized' });
                return;
            }
            const payload = await jwt_1.jwtProvider.verifyToken(token);
            if (!payload) {
                res.status(401).json({ error: 'Unauthorized' });
                return;
            }
            const { sub } = payload;
            const user = await this.usecase.profile(sub);
            const { salt, password, ...otherProps } = user;
            res.status(200).json({ data: otherProps });
        }
        catch (error) {
            res.status(400).json({
                message: error.message,
            });
        }
    }
    async introspectAPI(req, res) {
        try {
            const { token } = req.body;
            const result = await this.usecase.verifyToken(token);
            res.status(200).json({ data: result });
        }
        catch (error) {
            res.status(400).json({
                message: error.message,
            });
        }
    }
}
exports.UserHTTPService = UserHTTPService;
//# sourceMappingURL=index.js.map