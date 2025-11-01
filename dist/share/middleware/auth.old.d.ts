import { User } from "../../modules/user/model";
import { Handler } from "express";
import { IQueryRepository, ITokenProvider } from "../interface";
export declare function authMiddleware(userRepo: IQueryRepository<User, any>, tokenProvider: ITokenProvider): Handler;
