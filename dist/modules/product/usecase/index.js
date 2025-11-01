"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductUseCase = void 0;
const base_error_1 = require("../../../share/model/base-error");
const base_model_1 = require("../../../share/model/base-model");
const uuid_1 = require("uuid");
const dto_1 = require("../model/dto");
const error_1 = require("../model/error");
const product_1 = require("../model/product");
class ProductUseCase {
    repository;
    productBrandRepository;
    productCategoryRepository;
    constructor(repository, productBrandRepository, productCategoryRepository) {
        this.repository = repository;
        this.productBrandRepository = productBrandRepository;
        this.productCategoryRepository = productCategoryRepository;
    }
    async create(data) {
        const dto = dto_1.ProductCreateSchema.parse(data);
        if (dto.brandId) {
            const brand = await this.productBrandRepository.get(dto.brandId);
            if (!brand) {
                throw error_1.ErrBrandNotFound;
            }
        }
        if (dto.categoryId) {
            const category = await this.productCategoryRepository.get(dto.categoryId);
            if (!category) {
                throw error_1.ErrCategoryNotFound;
            }
        }
        const newId = (0, uuid_1.v7)();
        const newProduct = {
            ...dto,
            id: newId,
            status: base_model_1.ModelStatus.ACTIVE,
            rating: 0,
            saleCount: 0,
            gender: product_1.ProductGender.UNISEX,
            createdAt: new Date(),
            updatedAt: new Date(),
        };
        await this.repository.insert(newProduct);
        return newId;
    }
    async getDetail(id) {
        const data = await this.repository.get(id);
        if (!data || data.status === base_model_1.ModelStatus.DELETED) {
            throw base_error_1.ErrDataNotFound;
        }
        return data;
    }
    async update(id, data) {
        const dto = dto_1.ProductUpdateSchema.parse(data);
        const product = await this.repository.get(id);
        if (!product || product.status === base_model_1.ModelStatus.DELETED) {
            throw base_error_1.ErrDataNotFound;
        }
        await this.repository.update(id, dto);
        return true;
    }
    async list(cond, paging) {
        const parsedCond = dto_1.ProductCondSchema.parse(cond);
        return await this.repository.list(parsedCond, paging);
    }
    async delete(id) {
        const product = await this.repository.get(id);
        if (!product || product.status === base_model_1.ModelStatus.DELETED) {
            throw base_error_1.ErrDataNotFound;
        }
        await this.repository.delete(id, false);
        return true;
    }
}
exports.ProductUseCase = ProductUseCase;
//# sourceMappingURL=index.js.map