import { ModelStatus } from "../../../share/model/base-model";
import { z } from 'zod';
export declare enum ProductGender {
    MALE = "male",
    FEMALE = "female",
    UNISEX = "unisex"
}
export declare const ProductSchema: z.ZodObject<{
    id: z.ZodString;
    name: z.ZodString;
    gender: z.ZodEnum<typeof ProductGender>;
    price: z.ZodNumber;
    salePrice: z.ZodNumber;
    colors: z.ZodOptional<z.ZodString>;
    quantity: z.ZodNumber;
    brandId: z.ZodOptional<z.ZodString>;
    categoryId: z.ZodOptional<z.ZodString>;
    content: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodString>;
    rating: z.ZodNumber;
    saleCount: z.ZodNumber;
    status: z.ZodEnum<typeof ModelStatus>;
    createdAt: z.ZodDate;
    updatedAt: z.ZodDate;
}, z.core.$strip>;
export type Product = z.infer<typeof ProductSchema> & {
    category?: ProductCategory;
    brand?: ProductBrand;
};
export declare const ProductBrandSchema: z.ZodObject<{
    id: z.ZodString;
    name: z.ZodString;
}, z.core.$strip>;
export type ProductBrand = z.infer<typeof ProductBrandSchema>;
export declare const ProductCategorySchema: z.ZodObject<{
    id: z.ZodString;
    name: z.ZodString;
}, z.core.$strip>;
export type ProductCategory = z.infer<typeof ProductCategorySchema>;
