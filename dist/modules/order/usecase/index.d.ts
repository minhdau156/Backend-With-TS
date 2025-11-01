import { Requester } from "../../../share/interface";
import { ICartQueryRepository, IOrderCommandRepository, IOrderUseCase } from "../interface";
import { OrderCreateDTO, OrderUpdateDTO } from "../model";
export declare class OrderUseCase implements IOrderUseCase {
    private readonly orderCommandRepo;
    private readonly cartQueryRepo;
    constructor(orderCommandRepo: IOrderCommandRepository, cartQueryRepo: ICartQueryRepository);
    makeOrder(requester: Requester, data: OrderCreateDTO): Promise<string>;
    updateOrder(requester: Requester, id: string, data: OrderUpdateDTO): Promise<boolean>;
    deleteOrder(requester: Requester, id: string, isHard: boolean): Promise<boolean>;
}
