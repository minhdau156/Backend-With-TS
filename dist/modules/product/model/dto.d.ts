import { z } from 'zod';
export declare const ProductCreateSchema: z.ZodObject<{
    name: z.ZodString;
    price: z.ZodNumber;
    salePrice: z.ZodNumber;
    quantity: z.ZodNumber;
    brandId: z.ZodOptional<z.ZodString>;
    categoryId: z.ZodOptional<z.ZodString>;
    content: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type ProductCreateDTO = z.infer<typeof ProductCreateSchema>;
export declare const ProductUpdateSchema: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
    price: z.ZodOptional<z.ZodNumber>;
    salePrice: z.ZodOptional<z.ZodNumber>;
    quantity: z.ZodOptional<z.ZodNumber>;
    brandId: z.ZodOptional<z.ZodString>;
    categoryId: z.ZodOptional<z.ZodString>;
    content: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type ProductUpdateDTO = z.infer<typeof ProductUpdateSchema>;
export declare const ProductCondSchema: z.ZodObject<{
    fromPrice: z.ZodOptional<z.ZodNumber>;
    toPrice: z.ZodOptional<z.ZodNumber>;
    brandId: z.ZodOptional<z.ZodString>;
    categoryId: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type ProductCondDTO = z.infer<typeof ProductCondSchema>;
