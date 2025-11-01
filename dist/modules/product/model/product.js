"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductCategorySchema = exports.ProductBrandSchema = exports.ProductSchema = exports.ProductGender = void 0;
const base_model_1 = require("../../../share/model/base-model");
const zod_1 = require("zod");
const error_1 = require("./error");
var ProductGender;
(function (ProductGender) {
    ProductGender["MALE"] = "male";
    ProductGender["FEMALE"] = "female";
    ProductGender["UNISEX"] = "unisex";
})(ProductGender || (exports.ProductGender = ProductGender = {}));
exports.ProductSchema = zod_1.z.object({
    id: zod_1.z.string().uuid(),
    name: zod_1.z.string().min(2, error_1.ErrNameMustBeAtLeast2Characters.message),
    gender: zod_1.z.nativeEnum(ProductGender),
    price: zod_1.z.number().positive(error_1.ErrPriceMustBePositive.message),
    salePrice: zod_1.z.number().nonnegative(error_1.ErrSalePriceMustBeNonnegative.message),
    colors: zod_1.z.string().optional(),
    quantity: zod_1.z.number().int().nonnegative(error_1.ErrQuantityMustBeNonnegative.message),
    brandId: zod_1.z.string().uuid(error_1.ErrBrandIdMustBeValidUUID.message).optional(),
    categoryId: zod_1.z.string().uuid(error_1.ErrCategoryIdMustBeValidUUID.message).optional(),
    content: zod_1.z.string().optional(),
    description: zod_1.z.string().optional(),
    rating: zod_1.z.number().min(0).max(5),
    saleCount: zod_1.z.number().int().nonnegative(),
    status: zod_1.z.nativeEnum(base_model_1.ModelStatus),
    createdAt: zod_1.z.date(),
    updatedAt: zod_1.z.date(),
});
exports.ProductBrandSchema = zod_1.z.object({
    id: zod_1.z.string().uuid(),
    name: zod_1.z.string().min(2, error_1.ErrNameMustBeAtLeast2Characters.message),
});
exports.ProductCategorySchema = zod_1.z.object({
    id: zod_1.z.string().uuid(),
    name: zod_1.z.string().min(2, error_1.ErrNameMustBeAtLeast2Characters.message),
});
//# sourceMappingURL=product.js.map