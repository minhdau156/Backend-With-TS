import { ModelStatus } from '../../../share/model/base-model';
import { z } from 'zod';
export declare const CategoryCreateSchema: z.ZodObject<{
    name: z.ZodString;
    image: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodString>;
    parentId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
export type CategoryCreateDTO = z.infer<typeof CategoryCreateSchema>;
export declare const CategoryUpdateSchema: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
    image: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodString>;
    parentId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    status: z.ZodOptional<z.ZodEnum<typeof ModelStatus>>;
}, z.core.$strip>;
export type CategoryUpdateDTO = z.infer<typeof CategoryUpdateSchema>;
export declare const CategoryCondDTOSchema: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
    parentId: z.ZodOptional<z.ZodString>;
    status: z.ZodOptional<z.ZodEnum<typeof ModelStatus>>;
}, z.core.$strip>;
export type CategoryCondDTO = z.infer<typeof CategoryCondDTOSchema>;
