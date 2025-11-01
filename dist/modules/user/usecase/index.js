"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUseCase = void 0;
const jwt_1 = require("../../../share/component/jwt");
const interface_1 = require("../../../share/interface");
const base_error_1 = require("../../../share/model/base-error");
const bcrypt_1 = __importDefault(require("bcrypt"));
const uuid_1 = require("uuid");
const model_1 = require("../model");
const error_1 = require("../model/error");
class UserUseCase {
    repository;
    constructor(repository) {
        this.repository = repository;
    }
    async profile(userId) {
        const user = await this.repository.get(userId);
        if (!user) {
            throw base_error_1.ErrDataNotFound;
        }
        return user;
    }
    async verifyToken(token) {
        const payload = await jwt_1.jwtProvider.verifyToken(token);
        if (!payload) {
            throw error_1.ErrInvalidToken;
        }
        const user = await this.repository.get(payload.sub);
        if (!user) {
            throw base_error_1.ErrDataNotFound;
        }
        if (user.status === model_1.Status.DELETED || user.status === model_1.Status.INACTIVE || user.status === model_1.Status.BANNED) {
            throw error_1.ErrUserInactivated;
        }
        return { sub: user.id, role: user.role };
    }
    async login(data) {
        const dto = model_1.UserLoginDTOSchema.parse(data);
        const user = await this.repository.findByCond({ email: dto.email });
        if (!user) {
            throw error_1.ErrInvalidEmailAndPassword;
        }
        const isMatch = await bcrypt_1.default.compare(`${dto.password}.${user.salt}`, user.password);
        if (!isMatch) {
            throw error_1.ErrInvalidEmailAndPassword;
        }
        if (user.status === model_1.Status.DELETED || user.status === model_1.Status.INACTIVE) {
            throw error_1.ErrUserInactivated;
        }
        const role = user.role === model_1.Role.ADMIN ? interface_1.UserRole.ADMIN : interface_1.UserRole.USER;
        const token = jwt_1.jwtProvider.generateToken({ sub: user.id, role: role });
        return token;
    }
    async register(data) {
        const dto = model_1.UserRegistrationDTOSchema.parse(data);
        const existedUser = await this.repository.findByCond({ email: dto.email });
        if (existedUser) {
            throw error_1.ErrEmailExisted;
        }
        const salt = bcrypt_1.default.genSaltSync(10);
        const hashPassword = await bcrypt_1.default.hash(`${dto.password}.${salt}`, 10);
        const newId = (0, uuid_1.v7)();
        const newUser = {
            ...dto,
            password: hashPassword,
            id: newId,
            status: model_1.Status.ACTIVE,
            gender: model_1.Gender.UNKNOWN,
            salt: salt,
            role: model_1.Role.USER,
            createdAt: new Date(),
            updatedAt: new Date(),
        };
        await this.repository.insert(newUser);
        return newId;
    }
    async create(data) {
        return await this.register(data);
    }
    async getDetail(id) {
        const data = await this.repository.get(id);
        if (!data || data.status === model_1.Status.DELETED) {
            throw base_error_1.ErrDataNotFound;
        }
        return data;
    }
    async update(id, data) {
        const dto = model_1.userUpdateDTOSchema.parse(data);
        const product = await this.repository.get(id);
        if (!product || product.status === model_1.Status.DELETED) {
            throw base_error_1.ErrDataNotFound;
        }
        await this.repository.update(id, dto);
        return true;
    }
    async list(cond, paging) {
        const parsedCond = model_1.userCondDTOSchema.parse(cond);
        return await this.repository.list(parsedCond, paging);
    }
    async delete(id) {
        const product = await this.repository.get(id);
        if (!product || product.status === model_1.Status.DELETED) {
            throw base_error_1.ErrDataNotFound;
        }
        await this.repository.delete(id, false);
        return true;
    }
}
exports.UserUseCase = UserUseCase;
//# sourceMappingURL=index.js.map