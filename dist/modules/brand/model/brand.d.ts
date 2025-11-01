import { ModelStatus } from "../../../share/model/base-model";
import { z } from "zod";
export declare const modelName = "brand";
export declare const BrandSchema: z.ZodObject<{
    id: z.ZodString;
    name: z.ZodString;
    image: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodString>;
    tagLine: z.ZodOptional<z.ZodString>;
    status: z.ZodEnum<typeof ModelStatus>;
    createdAt: z.ZodDate;
    updatedAt: z.ZodDate;
}, z.core.$strip>;
export type Brand = z.infer<typeof BrandSchema>;
