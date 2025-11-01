import { Handler } from "express";
import { ITokenIntrospect } from "../interface";
export declare function authMiddleware(introspector: ITokenIntrospect): Handler;
