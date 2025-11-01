"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.allowRoles = allowRoles;
function allowRoles(roles) {
    return (req, res, next) => {
        if (!res.locals.requester) {
            res.status(401).json({ error: 'Unauthorized' });
            return;
        }
        const requester = res.locals.requester;
        if (roles.indexOf(requester.role) === -1) {
            res.status(401).json({ error: 'Unauthorized' });
            return;
        }
        next();
    };
}
//# sourceMappingURL=check-role.js.map