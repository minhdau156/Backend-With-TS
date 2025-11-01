import { ITokenIntrospect } from "../interface";
import { Handler } from "express";
import { UserRole } from "../interface";
export interface MdlFactory {
    auth: Handler;
    allowRoles: (roles: UserRole[]) => Handler;
}
export declare const setupMiddlewares: (introspector: ITokenIntrospect) => MdlFactory;
