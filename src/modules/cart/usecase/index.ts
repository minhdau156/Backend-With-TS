import { IProductUseCase } from "@/modules/product/interface";
import { ICartCommandRepository, ICartQueryRepository, ICartUseCase, IProductQueryRepository } from "../interface";
import { AddCartItemDTO, addCartItemDTOSchema, CartItem, UpdateCartItemDTO, updateCartItemDTOSchema } from "../model";
import { v7 } from "uuid";
import { ErrCartItemNotFound, ErrProductNotEnoughQuantity, ErrProductNotFound } from "../model/error";
import { noTrueLogging } from "sequelize/lib/utils/deprecations";
import { ErrUnauthorized } from "@share/error";

export class CartUseCase implements ICartUseCase {
    constructor(
        private readonly cartQueryRepo: ICartQueryRepository,
        private readonly cartCommandRepo: ICartCommandRepository,
        private readonly productQueryRepo: IProductQueryRepository
    ) {}
    
    
    // async listItems(requesterId: string): Promise<Array<CartItem> | null> {
    //     const items = await this.cartQueryRepo.listItems(requesterId);
    //     //1. Get cart product by ids
    //     //2. Map cart products to cart items
    //     return items;
    // }
    
    async addProductToCart(dto: AddCartItemDTO): Promise<boolean> {
        const dataDTO = addCartItemDTOSchema.parse(dto);
        const { userId, productId, attribute, quantity } = dataDTO;

        //1. Get Product (CartProduct model, with quantity)
        const product = await this.productQueryRepo.findById(productId);
        if (!product) {
            throw ErrProductNotFound;
        }

        //2.Check if the product is already in the cart
        
        const existingItem = await this.cartQueryRepo.findByCond({ userId, productId, attribute });
        if (existingItem) {
            
            //check product quantity if enough (after add more quantity)
            const newQuantity = existingItem.quantity + quantity;
            if (product.quantity < newQuantity) {
                throw ErrProductNotEnoughQuantity;
            }
            //add more quantity
            await this.cartCommandRepo.update(existingItem.id, {...existingItem, quantity: newQuantity});
        }
        else {
            //check product quantity if enough
            if (product.quantity < quantity) {
                throw ErrProductNotEnoughQuantity;
            }
            //add product item to cart
            const newId = v7();
            const newItem = { ...dataDTO, id: newId, createdAt: new Date(), updatedAt: new Date() };
            await this.cartCommandRepo.insert(newItem);

        }
        return true;
    }
    async removeProductFromCart(id: string, requesterId: string): Promise<boolean> {
        const existingItem = await this.cartQueryRepo.get(id);
        if (!existingItem) {
            throw ErrCartItemNotFound;
        }

        if (existingItem.userId !== requesterId) {
            throw ErrUnauthorized;
            console.log("This item does not belong to this user");
        }
        await this.cartCommandRepo.remove(id, true);
        return true;
    }

    async updateProductQuantities(dto: UpdateCartItemDTO[], requesterId: string): Promise<boolean> {
        dto = dto.map(item => updateCartItemDTOSchema.parse(item));

        const productIds = dto.map(item => item.productId);
        const products = await this.productQueryRepo.findByIds(productIds);
        const productMap = new Map<string, number>(); //productId -> quantity
        products.forEach(product => productMap.set(product.id, product.quantity));

        dto.forEach(item => {
            const userWantQuantity = item.quantity;
            const currentQuantity = productMap.get(item.productId) || 0;
            if (currentQuantity < userWantQuantity) {
                throw ErrProductNotEnoughQuantity;
            }
        })
        await this.cartCommandRepo.updateMany(dto, requesterId);
        return true;
    }
}