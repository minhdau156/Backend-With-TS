import { Request, Response, Router } from "express";
import { IOrderUseCase } from "../../interface";
import { Requester } from "@/share/interface";

export class OrderHttpService {
    constructor(
        private readonly orderUseCase: IOrderUseCase
    ) {}

    async makeOrderAPI(req: Request, res: Response) {
        const { body } = req;
        const requester = res.locals.requester as Requester;

        const result = await this.orderUseCase.makeOrder(requester, body);
        res.status(200).json(result);
    }

    getRoute(): Router {
        const router = Router();
        router.post("/orders", this.makeOrderAPI.bind(this));
        return router;
    }
}