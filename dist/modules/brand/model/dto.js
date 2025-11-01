"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrandUpdateDTOSchema = exports.BrandCreateDTOSchema = void 0;
const zod_1 = require("zod");
const errors_1 = require("./errors");
exports.BrandCreateDTOSchema = zod_1.z.object({
    name: zod_1.z.string().min(2, 'name must be at least 2 characters'),
    image: zod_1.z.string().optional(),
    description: zod_1.z.string().optional(),
    tagLine: zod_1.z.string().optional()
});
exports.BrandUpdateDTOSchema = zod_1.z.object({
    name: zod_1.z.string().min(2, errors_1.ErrBrandNameTooShort.message).optional(),
    image: zod_1.z.string().optional(),
    description: zod_1.z.string().optional(),
    tagLine: zod_1.z.string().optional()
});
//# sourceMappingURL=dto.js.map