import z from "zod";
export declare const cartProductSchema: z.ZodObject<{
    id: z.ZodString;
    name: z.ZodString;
    images: z.ZodNullable<z.ZodArray<z.ZodString>>;
    salePrice: z.ZodNumber;
    price: z.ZodNumber;
    quantity: z.ZodNumber;
}, z.core.$strip>;
export declare const cartItemSchema: z.ZodObject<{
    id: z.ZodString;
    userId: z.ZodString;
    productId: z.ZodString;
    attribute: z.ZodDefault<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    quantity: z.ZodDefault<z.ZodNumber>;
    product: z.ZodOptional<z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
        images: z.ZodNullable<z.ZodArray<z.ZodString>>;
        salePrice: z.ZodNumber;
        price: z.ZodNumber;
        quantity: z.ZodNumber;
    }, z.core.$strip>>;
}, z.core.$strip>;
export declare const addCartItemDTOSchema: z.ZodObject<{
    userId: z.ZodString;
    productId: z.ZodString;
    attribute: z.ZodDefault<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    quantity: z.ZodDefault<z.ZodNumber>;
}, z.core.$strip>;
export declare const cartItemCondDTOSchema: z.ZodObject<{
    userId: z.ZodOptional<z.ZodString>;
    productId: z.ZodOptional<z.ZodString>;
    attribute: z.ZodDefault<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
}, z.core.$strip>;
export declare const updateCartItemDTOSchema: z.ZodObject<{
    productId: z.ZodString;
    attribute: z.ZodDefault<z.ZodOptional<z.ZodNullable<z.ZodString>>>;
    quantity: z.ZodNumber;
}, z.core.$strip>;
export type CartProduct = z.infer<typeof cartProductSchema>;
export type CartItem = z.infer<typeof cartItemSchema>;
export type AddCartItemDTO = z.infer<typeof addCartItemDTOSchema>;
export type CartItemCondDTO = z.infer<typeof cartItemCondDTOSchema>;
export type UpdateCartItemDTO = z.infer<typeof updateCartItemDTOSchema>;
