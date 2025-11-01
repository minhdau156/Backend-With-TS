import { Requester } from "@/share/interface";
import { ICartQueryRepository, IOrderCommandRepository, IOrderQueryRepository, IOrderUseCase } from "../interface";
import { Order, OrderCreateDTO, orderCreateDTOSchema, OrderItem, OrderStatus, OrderUpdateDTO, PaymentStatus } from "../model";
import { v7 } from "uuid";
import { generateRandomString } from "@share/util";

export class OrderUseCase implements IOrderUseCase {

    constructor(
        private readonly orderCommandRepo: IOrderCommandRepository,
        
        private readonly cartQueryRepo: ICartQueryRepository
    ) {}
    async makeOrder(requester: Requester, data: OrderCreateDTO): Promise<string> {
        const {sub: userId} = requester;
        data = orderCreateDTOSchema.parse(data);

        const cartItems = await this.cartQueryRepo.listItems(userId);
        const trackingNumber = generateRandomString(6);

        const orderItems: OrderItem[] = cartItems.map(item => ({
            id: v7(),
            orderId: newId,
            productId: item.productId,
            name: item.product.name,
            attribute: item.attribute ?? '',
            price: item.product.salePrice,
            quantity: item.quantity,
        }))

        const newId = v7();
        
        const order: Order = {
            id: newId,
            userId,
            ...data,
            status: OrderStatus.PENDING,
            paymentStatus: PaymentStatus.PENDING,
            trackingNumber,
            items: orderItems,
            createdAt: new Date(),
            updatedAt: new Date(),
            
        }
        await this.orderCommandRepo.insert(order);

        return newId;
    }
    updateOrder(requester: Requester, id: string, data: OrderUpdateDTO): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    deleteOrder(requester: Requester, id: string, isHard: boolean): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    
}