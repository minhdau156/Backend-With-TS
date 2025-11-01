"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authMiddleware = authMiddleware;
const model_1 = require("../../modules/user/model");
function authMiddleware(userRepo, tokenProvider) {
    return async (req, res, next) => {
        try {
            const token = req.headers.authorization?.split(' ')[1];
            if (!token) {
                res.status(401).json({ error: 'Unauthorized' });
                return;
            }
            const requester = await tokenProvider.verifyToken(token);
            const user = await userRepo.get(requester.sub);
            if (!user) {
                res.status(401).json({ error: 'Unauthorized' });
                return;
            }
            const { status, role, id: userId } = user;
            if (status == model_1.Status.DELETED || status == model_1.Status.BANNED) {
                res.status(401).json({ error: 'Unauthorized' });
                return;
            }
            res.locals['requester'] = { userId, role };
            return next();
        }
        catch (error) {
            res.status(401).json({ error: 'Unauthorized' });
            return;
        }
    };
}
//# sourceMappingURL=auth.old.js.map