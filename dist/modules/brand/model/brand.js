"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrandSchema = exports.modelName = void 0;
const base_model_1 = require("../../../share/model/base-model");
const zod_1 = require("zod");
const errors_1 = require("./errors");
exports.modelName = "brand";
exports.BrandSchema = zod_1.z.object({
    id: zod_1.z.string().uuid(),
    name: zod_1.z.string().min(2, errors_1.ErrBrandNameTooShort.message),
    image: zod_1.z.string().optional(),
    description: zod_1.z.string().optional(),
    tagLine: zod_1.z.string().optional(),
    status: zod_1.z.nativeEnum(base_model_1.ModelStatus),
    createdAt: zod_1.z.date(),
    updatedAt: zod_1.z.date(),
});
//# sourceMappingURL=brand.js.map