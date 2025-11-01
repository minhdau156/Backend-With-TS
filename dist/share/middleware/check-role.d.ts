import { Handler } from "express";
import { UserRole } from "../interface";
export declare function allowRoles(roles: UserRole[]): Handler;
