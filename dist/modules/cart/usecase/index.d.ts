import { ICartCommandRepository, ICartQueryRepository, ICartUseCase, IProductQueryRepository } from "../interface";
import { AddCartItemDTO, UpdateCartItemDTO } from "../model";
export declare class CartUseCase implements ICartUseCase {
    private readonly cartQueryRepo;
    private readonly cartCommandRepo;
    private readonly productQueryRepo;
    constructor(cartQueryRepo: ICartQueryRepository, cartCommandRepo: ICartCommandRepository, productQueryRepo: IProductQueryRepository);
    addProductToCart(dto: AddCartItemDTO): Promise<boolean>;
    removeProductFromCart(id: string, requesterId: string): Promise<boolean>;
    updateProductQuantities(dto: UpdateCartItemDTO[], requesterId: string): Promise<boolean>;
}
