import { ModelStatus } from '../../../share/model/base-model';
import { z } from 'zod';
export declare enum CategoryStatus {
    Active = "active",
    Inactive = "inactive",
    Deleted = "deleted"
}
export declare const CategorySchema: z.ZodObject<{
    id: z.ZodString;
    name: z.ZodString;
    image: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodString>;
    position: z.ZodDefault<z.ZodNumber>;
    parentId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    status: z.ZodEnum<typeof ModelStatus>;
    createdAt: z.ZodDate;
    updatedAt: z.ZodDate;
}, z.core.$strip>;
export type Category = z.infer<typeof CategorySchema> & {
    children?: Category[];
};
