import { z } from "zod";
export declare const BrandCreateDTOSchema: z.ZodObject<{
    name: z.ZodString;
    image: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodString>;
    tagLine: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type BrandCreateDTO = z.infer<typeof BrandCreateDTOSchema>;
export declare const BrandUpdateDTOSchema: z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
    image: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodString>;
    tagLine: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type BrandUpdateDTO = z.infer<typeof BrandUpdateDTOSchema>;
export type BrandCondDTO = {};
