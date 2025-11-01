import { ServiceContext } from "../../share/interface/service-context";
import { Router } from "express";
import { Sequelize } from "sequelize";
export declare function setupCartHexagon(sequelize: Sequelize, sctx: ServiceContext): Router;
