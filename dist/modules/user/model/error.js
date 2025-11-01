"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrInvalidToken = exports.ErrUserInactivated = exports.ErrInvalidEmailAndPassword = exports.ErrEmailExisted = exports.ErrRoleInvalid = exports.ErrGenderInvalid = exports.ErrBirthdayInvalid = exports.ErrPasswordAtLeast6Chars = exports.ErrEmailInvalid = exports.ErrLastNameAtLeast2Chars = exports.ErrFirstNameAtLeast2Chars = void 0;
exports.ErrFirstNameAtLeast2Chars = new Error('First name must be at least 2 characters');
exports.ErrLastNameAtLeast2Chars = new Error('Last name must be at least 2 characters');
exports.ErrEmailInvalid = new Error('Email is invalid');
exports.ErrPasswordAtLeast6Chars = new Error('Password must be at least 6 characters');
exports.ErrBirthdayInvalid = new Error('Birthday is invalid');
exports.ErrGenderInvalid = new Error('Gender is invalid');
exports.ErrRoleInvalid = new Error('Role is invalid');
exports.ErrEmailExisted = new Error('Email is already existed');
exports.ErrInvalidEmailAndPassword = new Error('Invalid email and password');
exports.ErrUserInactivated = new Error('User is inactivated or banned');
exports.ErrInvalidToken = new Error('Invalid token');
//# sourceMappingURL=error.js.map