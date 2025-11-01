"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authMiddleware = authMiddleware;
function authMiddleware(introspector) {
    return async (req, res, next) => {
        try {
            const token = req.headers.authorization?.split(' ')[1];
            if (!token) {
                res.status(401).json({ error: 'Unauthorized' });
                return;
            }
            const { payload, error, isOk } = await introspector.introspect(token);
            if (!isOk) {
                res.status(401).json({ error: error?.message || 'Unauthorized' });
                return;
            }
            const requester = payload;
            res.locals['requester'] = requester;
            return next();
        }
        catch (error) {
            res.status(401).json({ error: 'Unauthorized' });
            return;
        }
    };
}
//# sourceMappingURL=auth.js.map