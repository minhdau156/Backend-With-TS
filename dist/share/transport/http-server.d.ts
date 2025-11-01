import { Request, Response } from "express";
import { IUseCase } from "../interface";
export declare abstract class BaseHttpService<Entity, CreateDTO, UpdateDTO, Cond> {
    readonly useCase: IUseCase<CreateDTO, UpdateDTO, Entity, Cond>;
    constructor(useCase: IUseCase<CreateDTO, UpdateDTO, Entity, Cond>);
    createAPI(req: Request<any, any, CreateDTO>, res: Response): Promise<void>;
    getDetailAPI(req: Request, res: Response): Promise<void>;
    updateAPI(req: Request<any, any, UpdateDTO>, res: Response): Promise<void>;
    deleteAPI(req: Request, res: Response): Promise<void>;
    listAPI(req: Request, res: Response): Promise<void>;
}
