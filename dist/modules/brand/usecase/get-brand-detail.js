"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetBrandDetailQuery = void 0;
const base_error_1 = require("../../../share/model/base-error");
class GetBrandDetailQuery {
    repository;
    constructor(repository) {
        this.repository = repository;
    }
    async query(query) {
        const data = await this.repository.get(query.id);
        if (!data) {
            throw base_error_1.ErrDataNotFound;
        }
        return data;
    }
}
exports.GetBrandDetailQuery = GetBrandDetailQuery;
//# sourceMappingURL=get-brand-detail.js.map