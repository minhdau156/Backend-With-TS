"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductCondSchema = exports.ProductUpdateSchema = exports.ProductCreateSchema = void 0;
const zod_1 = require("zod");
const error_1 = require("./error");
exports.ProductCreateSchema = zod_1.z.object({
    name: zod_1.z.string().min(2, error_1.ErrNameMustBeAtLeast2Characters.message),
    price: zod_1.z.number().positive(error_1.ErrPriceMustBePositive.message),
    salePrice: zod_1.z.number().nonnegative(error_1.ErrSalePriceMustBeNonnegative.message),
    quantity: zod_1.z.number().int().nonnegative(error_1.ErrQuantityMustBeNonnegative.message),
    brandId: zod_1.z.string().uuid(error_1.ErrBrandIdMustBeValidUUID.message).optional(),
    categoryId: zod_1.z.string().uuid(error_1.ErrCategoryIdMustBeValidUUID.message).optional(),
    content: zod_1.z.string().optional(),
    description: zod_1.z.string().optional(),
});
exports.ProductUpdateSchema = zod_1.z.object({
    name: zod_1.z.string().min(2, error_1.ErrNameMustBeAtLeast2Characters.message).optional(),
    price: zod_1.z.number().positive(error_1.ErrPriceMustBePositive.message).optional(),
    salePrice: zod_1.z.number().nonnegative(error_1.ErrSalePriceMustBeNonnegative.message).optional(),
    quantity: zod_1.z.number().int().nonnegative(error_1.ErrQuantityMustBeNonnegative.message).optional(),
    brandId: zod_1.z.string().uuid(error_1.ErrBrandIdMustBeValidUUID.message).optional(),
    categoryId: zod_1.z.string().uuid(error_1.ErrCategoryIdMustBeValidUUID.message).optional(),
    content: zod_1.z.string().optional(),
    description: zod_1.z.string().optional(),
});
exports.ProductCondSchema = zod_1.z.object({
    fromPrice: zod_1.z.number().positive(error_1.ErrFromPriceMustBePositive.message).optional(),
    toPrice: zod_1.z.number().positive(error_1.ErrToPriceMustBePositive.message).optional(),
    brandId: zod_1.z.string().uuid(error_1.ErrBrandIdMustBeValidUUID.message).optional(),
    categoryId: zod_1.z.string().uuid(error_1.ErrCategoryIdMustBeValidUUID.message).optional(),
});
//# sourceMappingURL=dto.js.map