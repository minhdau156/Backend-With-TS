"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartUseCase = void 0;
const model_1 = require("../model");
const uuid_1 = require("uuid");
const error_1 = require("../model/error");
const error_2 = require("../../../share/error");
class CartUseCase {
    cartQueryRepo;
    cartCommandRepo;
    productQueryRepo;
    constructor(cartQueryRepo, cartCommandRepo, productQueryRepo) {
        this.cartQueryRepo = cartQueryRepo;
        this.cartCommandRepo = cartCommandRepo;
        this.productQueryRepo = productQueryRepo;
    }
    async addProductToCart(dto) {
        const dataDTO = model_1.addCartItemDTOSchema.parse(dto);
        const { userId, productId, attribute, quantity } = dataDTO;
        const product = await this.productQueryRepo.findById(productId);
        if (!product) {
            throw error_1.ErrProductNotFound;
        }
        const existingItem = await this.cartQueryRepo.findByCond({ userId, productId, attribute });
        if (existingItem) {
            const newQuantity = existingItem.quantity + quantity;
            if (product.quantity < newQuantity) {
                throw error_1.ErrProductNotEnoughQuantity;
            }
            await this.cartCommandRepo.update(existingItem.id, { ...existingItem, quantity: newQuantity });
        }
        else {
            if (product.quantity < quantity) {
                throw error_1.ErrProductNotEnoughQuantity;
            }
            const newId = (0, uuid_1.v7)();
            const newItem = { ...dataDTO, id: newId, createdAt: new Date(), updatedAt: new Date() };
            await this.cartCommandRepo.insert(newItem);
        }
        return true;
    }
    async removeProductFromCart(id, requesterId) {
        const existingItem = await this.cartQueryRepo.get(id);
        if (!existingItem) {
            throw error_1.ErrCartItemNotFound;
        }
        if (existingItem.userId !== requesterId) {
            throw error_2.ErrUnauthorized;
            console.log("This item does not belong to this user");
        }
        await this.cartCommandRepo.remove(id, true);
        return true;
    }
    async updateProductQuantities(dto, requesterId) {
        dto = dto.map(item => model_1.updateCartItemDTOSchema.parse(item));
        const productIds = dto.map(item => item.productId);
        const products = await this.productQueryRepo.findByIds(productIds);
        const productMap = new Map();
        products.forEach(product => productMap.set(product.id, product.quantity));
        dto.forEach(item => {
            const userWantQuantity = item.quantity;
            const currentQuantity = productMap.get(item.productId) || 0;
            if (currentQuantity < userWantQuantity) {
                throw error_1.ErrProductNotEnoughQuantity;
            }
        });
        await this.cartCommandRepo.updateMany(dto, requesterId);
        return true;
    }
}
exports.CartUseCase = CartUseCase;
//# sourceMappingURL=index.js.map