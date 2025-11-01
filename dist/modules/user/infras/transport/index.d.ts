import { IUserUseCase } from "../../../user/interface";
import { User, UserCondDTO, UserRegistrationDTO, UserUpdateDTO } from "../../../user/model";
import { BaseHttpService } from "../../../../share/transport/http-server";
import { Request, Response } from "express";
export declare class UserHTTPService extends BaseHttpService<User, UserRegistrationDTO, UserUpdateDTO, UserCondDTO> {
    readonly usecase: IUserUseCase;
    constructor(usecase: IUserUseCase);
    registerAPI(req: Request, res: Response): Promise<void>;
    loginAPI(req: Request, res: Response): Promise<void>;
    profileAPI(req: Request, res: Response): Promise<void>;
    introspectAPI(req: Request, res: Response): Promise<void>;
}
