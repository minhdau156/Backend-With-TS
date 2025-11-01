import { Sequelize } from "sequelize";
import { ServiceContext } from "../../share/interface/service-context";
export declare const setupUserHexagon: (sequelize: Sequelize, sctx: ServiceContext) => import("express-serve-static-core").Router;
