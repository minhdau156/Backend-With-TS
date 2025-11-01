import { Sequelize } from "sequelize";
import {
  init,
  modelName,
  OrderCommandRepository,
} from "./infras/repository/mysql";
import { CartQueryRepository } from "./infras/repository/rpc";
import { config } from "@share/component/config";
import { OrderUseCase } from "./usecase";
import { OrderHttpService } from "./infras/transport/http-service";

export const setupOrderHexagon = (sequelize: Sequelize) => {
  init(sequelize);
  const orderCommandRepository = new OrderCommandRepository(
    sequelize,
    modelName
  );
  const cartQueryRepository = new CartQueryRepository(config.rpc.cart);
  const orderUseCase = new OrderUseCase(
    orderCommandRepository,
    cartQueryRepository
  );
  const httpService = new OrderHttpService(orderUseCase);
  return httpService.getRoute();
};
