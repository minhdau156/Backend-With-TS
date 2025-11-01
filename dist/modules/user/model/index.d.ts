import { z } from "zod";
export declare enum Gender {
    MALE = "male",
    FEMALE = "female",
    UNKNOWN = "unknown"
}
export declare enum Role {
    USER = "user",
    ADMIN = "admin"
}
export declare enum Status {
    ACTIVE = "active",
    PENDING = "pending",
    INACTIVE = "inactive",
    BANNED = "banned",
    DELETED = "deleted"
}
export declare const userSchema: z.ZodObject<{
    id: z.ZodString;
    avatar: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    firstName: z.ZodString;
    lastName: z.ZodString;
    email: z.ZodString;
    password: z.ZodString;
    salt: z.ZodString;
    phone: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    address: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    birthday: z.ZodOptional<z.ZodNullable<z.ZodDate>>;
    gender: z.ZodEnum<typeof Gender>;
    role: z.ZodEnum<typeof Role>;
    status: z.ZodOptional<z.ZodEnum<typeof Status>>;
    createdAt: z.ZodDate;
    updatedAt: z.ZodDate;
}, z.core.$strip>;
export type User = z.infer<typeof userSchema>;
export declare const UserRegistrationDTOSchema: z.ZodObject<{
    firstName: z.ZodString;
    lastName: z.ZodString;
    email: z.ZodString;
    password: z.ZodString;
}, z.core.$strip>;
export declare const UserLoginDTOSchema: z.ZodObject<{
    email: z.ZodString;
    password: z.ZodString;
}, z.core.$strip>;
export type UserRegistrationDTO = z.infer<typeof UserRegistrationDTOSchema>;
export type UserLoginDTO = z.infer<typeof UserLoginDTOSchema>;
export declare const userUpdateDTOSchema: z.ZodObject<{
    avatar: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    firstName: z.ZodOptional<z.ZodString>;
    lastName: z.ZodOptional<z.ZodString>;
    email: z.ZodOptional<z.ZodString>;
    password: z.ZodOptional<z.ZodString>;
    salt: z.ZodOptional<z.ZodString>;
    phone: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    address: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    birthday: z.ZodOptional<z.ZodNullable<z.ZodDate>>;
    gender: z.ZodOptional<z.ZodEnum<typeof Gender>>;
    role: z.ZodOptional<z.ZodEnum<typeof Role>>;
    status: z.ZodOptional<z.ZodEnum<typeof Status>>;
}, z.core.$strip>;
export type UserUpdateDTO = z.infer<typeof userUpdateDTOSchema>;
export declare const userCondDTOSchema: z.ZodObject<{
    firstName: z.ZodOptional<z.ZodString>;
    lastName: z.ZodOptional<z.ZodString>;
    email: z.ZodOptional<z.ZodString>;
    phone: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    address: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    gender: z.ZodOptional<z.ZodEnum<typeof Gender>>;
    role: z.ZodOptional<z.ZodEnum<typeof Role>>;
    status: z.ZodOptional<z.ZodEnum<typeof Status>>;
}, z.core.$strip>;
export type UserCondDTO = z.infer<typeof userCondDTOSchema>;
