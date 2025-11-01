"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userCondDTOSchema = exports.userUpdateDTOSchema = exports.UserLoginDTOSchema = exports.UserRegistrationDTOSchema = exports.userSchema = exports.Status = exports.Role = exports.Gender = void 0;
const zod_1 = require("zod");
const error_1 = require("./error");
var Gender;
(function (Gender) {
    Gender["MALE"] = "male";
    Gender["FEMALE"] = "female";
    Gender["UNKNOWN"] = "unknown";
})(Gender || (exports.Gender = Gender = {}));
var Role;
(function (Role) {
    Role["USER"] = "user";
    Role["ADMIN"] = "admin";
})(Role || (exports.Role = Role = {}));
var Status;
(function (Status) {
    Status["ACTIVE"] = "active";
    Status["PENDING"] = "pending";
    Status["INACTIVE"] = "inactive";
    Status["BANNED"] = "banned";
    Status["DELETED"] = "deleted";
})(Status || (exports.Status = Status = {}));
exports.userSchema = zod_1.z.object({
    id: zod_1.z.string().uuid(),
    avatar: zod_1.z.string().nullable().optional(),
    firstName: zod_1.z.string().min(2, error_1.ErrFirstNameAtLeast2Chars.message),
    lastName: zod_1.z.string().min(2, error_1.ErrLastNameAtLeast2Chars.message),
    email: zod_1.z.string().email(error_1.ErrEmailInvalid.message),
    password: zod_1.z.string().min(6, error_1.ErrPasswordAtLeast6Chars.message),
    salt: zod_1.z.string().min(8),
    phone: zod_1.z.string().nullable().optional(),
    address: zod_1.z.string().nullable().optional(),
    birthday: zod_1.z.date(error_1.ErrBirthdayInvalid.message).nullable().optional(),
    gender: zod_1.z.nativeEnum(Gender, error_1.ErrGenderInvalid.message),
    role: zod_1.z.nativeEnum(Role, error_1.ErrRoleInvalid.message),
    status: zod_1.z.nativeEnum(Status).optional(),
    createdAt: zod_1.z.date(),
    updatedAt: zod_1.z.date(),
});
exports.UserRegistrationDTOSchema = exports.userSchema.pick({
    firstName: true,
    lastName: true,
    email: true,
    password: true,
});
exports.UserLoginDTOSchema = exports.userSchema.pick({
    email: true,
    password: true,
});
exports.userUpdateDTOSchema = zod_1.z.object({
    avatar: zod_1.z.string().nullable().optional(),
    firstName: zod_1.z.string().min(2, error_1.ErrFirstNameAtLeast2Chars.message).optional(),
    lastName: zod_1.z.string().min(2, error_1.ErrLastNameAtLeast2Chars.message).optional(),
    email: zod_1.z.string().email(error_1.ErrEmailInvalid.message).optional(),
    password: zod_1.z.string().min(6, error_1.ErrPasswordAtLeast6Chars.message).optional(),
    salt: zod_1.z.string().min(8).optional(),
    phone: zod_1.z.string().nullable().optional(),
    address: zod_1.z.string().nullable().optional(),
    birthday: zod_1.z.date(error_1.ErrBirthdayInvalid.message).nullable().optional(),
    gender: zod_1.z.nativeEnum(Gender, error_1.ErrGenderInvalid.message).optional(),
    role: zod_1.z.nativeEnum(Role, error_1.ErrRoleInvalid.message).optional(),
    status: zod_1.z.nativeEnum(Status).optional(),
});
exports.userCondDTOSchema = zod_1.z.object({
    firstName: zod_1.z.string().min(2, error_1.ErrFirstNameAtLeast2Chars.message).optional(),
    lastName: zod_1.z.string().min(2, error_1.ErrLastNameAtLeast2Chars.message).optional(),
    email: zod_1.z.string().email(error_1.ErrEmailInvalid.message).optional(),
    phone: zod_1.z.string().nullable().optional(),
    address: zod_1.z.string().nullable().optional(),
    gender: zod_1.z.nativeEnum(Gender, error_1.ErrGenderInvalid.message).optional(),
    role: zod_1.z.nativeEnum(Role, error_1.ErrRoleInvalid.message).optional(),
    status: zod_1.z.nativeEnum(Status).optional(),
});
//# sourceMappingURL=index.js.map