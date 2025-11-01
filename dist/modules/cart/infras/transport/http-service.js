"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartHttpService = void 0;
class CartHttpService {
    cartUseCase;
    productQueryRepo;
    cartQueryRepo;
    constructor(cartUseCase, productQueryRepo, cartQueryRepo) {
        this.cartUseCase = cartUseCase;
        this.productQueryRepo = productQueryRepo;
        this.cartQueryRepo = cartQueryRepo;
    }
    async addProductToCartAPI(req, res) {
        const requester = res.locals.requester;
        const { sub: userId } = requester;
        const dto = { ...req.body, userId };
        const result = await this.cartUseCase.addProductToCart(dto);
        res.status(200).json({
            data: result
        });
    }
    async removeProductFromCartAPI(req, res) {
        const requester = res.locals.requester;
        const { sub: userId } = requester;
        const { id } = req.params;
        const result = await this.cartUseCase.removeProductFromCart(id, userId);
        res.status(200).json({
            data: result
        });
    }
    async listItemsAPI(req, res) {
        const requester = res.locals.requester;
        const { sub: userId } = requester;
        const result = await this.cartQueryRepo.listItems(userId);
        const productIds = result.map(item => item.productId);
        const products = await this.productQueryRepo.findByIds(productIds);
        const itemMap = new Map();
        result.forEach(item => itemMap.set(item.productId, item));
        products.forEach(product => {
            const cartItem = itemMap.get(product.id);
            if (cartItem) {
                cartItem.product = product;
            }
        });
        res.status(200).json({
            data: result
        });
    }
    async updateProductQuantitiesAPI(req, res) {
        const requester = res.locals.requester;
        const { sub: userId } = requester;
        const dto = req.body;
        await this.cartUseCase.updateProductQuantities(dto, userId);
        res.status(200).json({
            data: true
        });
    }
    async listItemsRPC(req, res) {
        const { userId } = req.body;
        const result = await this.cartQueryRepo.listItems(userId);
        const productIds = result.map(item => item.productId);
        const products = await this.productQueryRepo.findByIds(productIds);
        const itemMap = new Map();
        result.forEach(item => itemMap.set(item.productId, item));
        products.forEach(product => {
            const cartItem = itemMap.get(product.id);
            if (cartItem) {
                cartItem.product = product;
            }
        });
        res.status(200).json({
            data: result
        });
    }
}
exports.CartHttpService = CartHttpService;
//# sourceMappingURL=http-service.js.map