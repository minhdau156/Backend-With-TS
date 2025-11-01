"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderHttpService = void 0;
const express_1 = require("express");
class OrderHttpService {
    orderUseCase;
    constructor(orderUseCase) {
        this.orderUseCase = orderUseCase;
    }
    async makeOrderAPI(req, res) {
        const { body } = req;
        const requester = res.locals.requester;
        const result = await this.orderUseCase.makeOrder(requester, body);
        res.status(200).json(result);
    }
    getRoute() {
        const router = (0, express_1.Router)();
        router.post("/orders", this.makeOrderAPI.bind(this));
        return router;
    }
}
exports.OrderHttpService = OrderHttpService;
//# sourceMappingURL=http-service.js.map