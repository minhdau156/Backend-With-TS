"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListBrandQuery = void 0;
class ListBrandQuery {
    repository;
    constructor(repository) {
        this.repository = repository;
    }
    async query(query) {
        const collection = await this.repository.list(query.cond, query.paging);
        return collection;
    }
}
exports.ListBrandQuery = ListBrandQuery;
//# sourceMappingURL=list-brand.js.map