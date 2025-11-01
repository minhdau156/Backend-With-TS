"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MySQLCommandRepository = exports.MySQLQueryRepository = exports.MySQLBrandRespository = void 0;
const repo_sequelize_1 = require("../../../../../share/repository/repo-sequelize");
const dto_1 = require("./dto");
class MySQLBrandRespository extends repo_sequelize_1.BaseRepositorySequelize {
    constructor(sequelize) {
        super(new MySQLQueryRepository(sequelize, dto_1.modelName), new MySQLCommandRepository(sequelize, dto_1.modelName));
    }
}
exports.MySQLBrandRespository = MySQLBrandRespository;
class MySQLQueryRepository extends repo_sequelize_1.BaseQueryRepositorySequelize {
}
exports.MySQLQueryRepository = MySQLQueryRepository;
class MySQLCommandRepository extends repo_sequelize_1.BaseCommandRepositorySequelize {
}
exports.MySQLCommandRepository = MySQLCommandRepository;
//# sourceMappingURL=index.js.map