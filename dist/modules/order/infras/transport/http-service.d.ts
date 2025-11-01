import { Request, Response, Router } from "express";
import { IOrderUseCase } from "../../interface";
export declare class OrderHttpService {
    private readonly orderUseCase;
    constructor(orderUseCase: IOrderUseCase);
    makeOrderAPI(req: Request, res: Response): Promise<void>;
    getRoute(): Router;
}
