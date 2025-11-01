import { CreateCommand, DeleteCommand, GetDetailQuery, ListQuery, UpdateCommand } from "../../../brand/interface";
import { Brand } from "../../../brand/model/brand";
import { ICommandHandler, IQueryHandler } from "../../../../share/interface";
import { Request, Response } from "express";
export declare class BrandHttpService {
    private readonly createCmdHandler;
    private readonly getDetailQueryHandler;
    private readonly updateCmdHandler;
    private readonly deleteCmdHandler;
    private readonly listQueryHandler;
    constructor(createCmdHandler: ICommandHandler<CreateCommand, string>, getDetailQueryHandler: IQueryHandler<GetDetailQuery, Brand>, updateCmdHandler: ICommandHandler<UpdateCommand, void>, deleteCmdHandler: ICommandHandler<DeleteCommand, void>, listQueryHandler: IQueryHandler<ListQuery, Brand[]>);
    createAPI(req: Request, res: Response): Promise<void>;
    getDetailAPI(req: Request, res: Response): Promise<void>;
    updateAPI(req: Request, res: Response): Promise<void>;
    deleteAPI(req: Request, res: Response): Promise<void>;
    listAPI(req: Request, res: Response): Promise<void>;
    listByIds(req: Request, res: Response): Promise<void>;
}
