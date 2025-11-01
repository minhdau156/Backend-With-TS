"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrCategoryNotFound = exports.ErrBrandNotFound = exports.ErrToPriceMustBePositive = exports.ErrFromPriceMustBePositive = exports.ErrCategoryIdMustBeValidUUID = exports.ErrBrandIdMustBeValidUUID = exports.ErrQuantityMustBeNonnegative = exports.ErrSalePriceMustBeNonnegative = exports.ErrPriceMustBePositive = exports.ErrNameMustBeAtLeast2Characters = void 0;
exports.ErrNameMustBeAtLeast2Characters = new Error('Name must be at least 2 characters');
exports.ErrPriceMustBePositive = new Error('Price must be positive');
exports.ErrSalePriceMustBeNonnegative = new Error('Sale price must be nonnegative');
exports.ErrQuantityMustBeNonnegative = new Error('Quantity must be nonnegative');
exports.ErrBrandIdMustBeValidUUID = new Error('Brand ID must be a valid UUID');
exports.ErrCategoryIdMustBeValidUUID = new Error('Category ID must be a valid UUID');
exports.ErrFromPriceMustBePositive = new Error('From price must be positive');
exports.ErrToPriceMustBePositive = new Error('To price must be positive');
exports.ErrBrandNotFound = new Error('Brand not found');
exports.ErrCategoryNotFound = new Error('Category not found');
//# sourceMappingURL=error.js.map