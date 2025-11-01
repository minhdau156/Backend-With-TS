import { Requester } from "@/share/interface";
import { CartItem, Order, OrderCondDTO, OrderCreateDTO, OrderUpdateDTO, Product } from "../model";
import { PagingDTO } from "@/share/model/paging";

export interface IOrderUseCase {
    makeOrder(requester: Requester, dataO: OrderCreateDTO): Promise<string>;
    updateOrder(requester: Requester, id: string, data: OrderUpdateDTO): Promise<boolean>;
    deleteOrder(requester: Requester, id: string, isHard: boolean): Promise<boolean>;
}

export interface IOrderQueryRepository {
    get(id: string): Promise<Order | null>;
    list(cond: OrderCondDTO, pagination: PagingDTO): Promise<Array<Order>>
}

export interface IOrderCommandRepository {
    insert(data: Order) : Promise<void>;
    update(id: string, data: OrderUpdateDTO): Promise<boolean>;
    delete(id: string, isHard: boolean): Promise<boolean>;
}

export interface IOrderRepository extends IOrderQueryRepository, IOrderCommandRepository {}

//Driven Ports(RPC service)

export interface ICartQueryRepository {
    listItems(userId: string): Promise<Array<CartItem>>
    clearItems(userId: string): Promise<boolean>
}

export interface IProductQueryRepository {
    findByIds(ids: Array<string>): Promise<Array<Product>>
}