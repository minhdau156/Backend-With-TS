import { z } from "zod";
export declare enum OrderStatus {
    PENDING = "pending",
    CONFIRMED = "confirmed",
    PROCESSING = "processing",
    SHIPPING = "shipping",
    DELIVERED = "delivered",
    COMPLETED = "completed",
    CANCELED = "canceled",
    REFUNDED = "refunded",
    DELETED = "deleted"
}
export declare enum PaymentMethod {
    COD = "cod",
    ZALO = "zalo"
}
export declare enum ShippingMethod {
    FREE = "free",
    STANDARD = "standard"
}
export declare enum PaymentStatus {
    PENDING = "pending",
    PAID = "paid",
    FAILED = "failed"
}
export declare const orderItemSchema: z.ZodObject<{
    id: z.ZodString;
    orderId: z.ZodString;
    productId: z.ZodString;
    name: z.ZodString;
    attribute: z.ZodString;
    price: z.ZodNumber;
    quantity: z.ZodNumber;
}, z.core.$strip>;
export type OrderItem = z.infer<typeof orderItemSchema>;
export declare const orderSchema: z.ZodObject<{
    id: z.ZodString;
    userId: z.ZodString;
    shippingAddress: z.ZodString;
    shippingCity: z.ZodOptional<z.ZodString>;
    recipientFirstName: z.ZodString;
    recipientLastName: z.ZodString;
    recipientPhone: z.ZodOptional<z.ZodString>;
    recipientEmail: z.ZodOptional<z.ZodString>;
    shippingMethod: z.ZodEnum<typeof ShippingMethod>;
    paymentMethod: z.ZodEnum<typeof PaymentMethod>;
    paymentStatus: z.ZodEnum<typeof PaymentStatus>;
    trackingNumber: z.ZodString;
    status: z.ZodEnum<typeof OrderStatus>;
    items: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        orderId: z.ZodString;
        productId: z.ZodString;
        name: z.ZodString;
        attribute: z.ZodString;
        price: z.ZodNumber;
        quantity: z.ZodNumber;
    }, z.core.$strip>>;
    createdAt: z.ZodDate;
    updatedAt: z.ZodDate;
}, z.core.$strip>;
export type Order = z.infer<typeof orderSchema>;
export declare const orderCondDTOSchema: z.ZodObject<{
    status: z.ZodOptional<z.ZodEnum<typeof OrderStatus>>;
    userId: z.ZodOptional<z.ZodString>;
    shippingMethod: z.ZodOptional<z.ZodEnum<typeof ShippingMethod>>;
    paymentMethod: z.ZodOptional<z.ZodEnum<typeof PaymentMethod>>;
    paymentStatus: z.ZodOptional<z.ZodEnum<typeof PaymentStatus>>;
}, z.core.$strip>;
export type OrderCondDTO = z.infer<typeof orderCondDTOSchema>;
export declare const orderCreateDTOSchema: z.ZodObject<{
    shippingAddress: z.ZodString;
    shippingCity: z.ZodOptional<z.ZodString>;
    recipientFirstName: z.ZodString;
    recipientLastName: z.ZodString;
    recipientPhone: z.ZodOptional<z.ZodString>;
    recipientEmail: z.ZodOptional<z.ZodString>;
    shippingMethod: z.ZodEnum<typeof ShippingMethod>;
    paymentMethod: z.ZodEnum<typeof PaymentMethod>;
}, z.core.$strip>;
export type OrderCreateDTO = z.infer<typeof orderCreateDTOSchema>;
export declare const orderUpdateDTOSchema: z.ZodObject<{
    status: z.ZodOptional<z.ZodEnum<typeof OrderStatus>>;
    shippingAddress: z.ZodOptional<z.ZodString>;
    shippingCity: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    recipientFirstName: z.ZodOptional<z.ZodString>;
    recipientLastName: z.ZodOptional<z.ZodString>;
    recipientPhone: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    recipientEmail: z.ZodOptional<z.ZodOptional<z.ZodString>>;
    shippingMethod: z.ZodOptional<z.ZodEnum<typeof ShippingMethod>>;
    paymentMethod: z.ZodOptional<z.ZodEnum<typeof PaymentMethod>>;
    paymentStatus: z.ZodOptional<z.ZodEnum<typeof PaymentStatus>>;
}, z.core.$strip>;
export type OrderUpdateDTO = z.infer<typeof orderUpdateDTOSchema>;
export type Customer = {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    address: string;
};
export type Product = {
    id: string;
    name: string;
    salePrice: number;
    image: string | null;
};
export type CartItem = {
    id: string;
    userId: string;
    productId: string;
    attribute: string;
    quantity: number;
    product: Product;
};
