import { ServiceContext } from "@/share/interface/service-context";
import { Router } from "express";
import { Sequelize } from "sequelize";
import { init, modelName } from "./infras/repository/mysql/dto";
import { CartUseCase } from "./usecase";
import { CartRepository } from "./infras/repository/mysql";
import { CartHttpService } from "./infras/transport/http-service";
import { CartProductRPCRepo } from "./infras/repository/rpc";
import { config } from "@share/component/config";

export function setupCartHexagon(
  sequelize: Sequelize,
  sctx: ServiceContext
): Router {
  init(sequelize);
  const cartRepository = new CartRepository(sequelize, modelName);
  const productRPCRepository = new CartProductRPCRepo(config.rpc.product);
  const cartUseCase = new CartUseCase(
    cartRepository,
    cartRepository,
    productRPCRepository
  );

  const cartHttpService = new CartHttpService(
    cartUseCase,
    productRPCRepository,
    cartRepository
  );
  const router = Router();
  const mdlFactory = sctx.mdlFactory;

  router.post(
    "/carts",
    mdlFactory.auth,
    cartHttpService.addProductToCartAPI.bind(cartHttpService)
  );
  router.post(
    "/carts/:id",
    mdlFactory.auth,
    cartHttpService.removeProductFromCartAPI.bind(cartHttpService)
  );
  router.get(
    "/carts",
    mdlFactory.auth,
    cartHttpService.listItemsAPI.bind(cartHttpService)
  );
  router.patch(
    "/carts",
    mdlFactory.auth,
    cartHttpService.updateProductQuantitiesAPI.bind(cartHttpService)
  );

  // RPC

  router.post("/rpc/carts/items", cartHttpService.listItemsRPC.bind(cartHttpService));
  return router;
}
