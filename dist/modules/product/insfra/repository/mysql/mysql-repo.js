"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MYSQLProductCommandRepository = exports.MYSQLProductQueryRepository = exports.MySQLProductRepository = void 0;
const repo_sequelize_1 = require("../../../../../share/repository/repo-sequelize");
class MySQLProductRepository extends repo_sequelize_1.BaseRepositorySequelize {
    sequelize;
    modelName;
    constructor(sequelize, modelName) {
        super(new MYSQLProductQueryRepository(sequelize, modelName), new MYSQLProductCommandRepository(sequelize, modelName));
        this.sequelize = sequelize;
        this.modelName = modelName;
    }
}
exports.MySQLProductRepository = MySQLProductRepository;
class MYSQLProductQueryRepository extends repo_sequelize_1.BaseQueryRepositorySequelize {
    sequelize;
    modelName;
    constructor(sequelize, modelName) {
        super(sequelize, modelName);
        this.sequelize = sequelize;
        this.modelName = modelName;
    }
}
exports.MYSQLProductQueryRepository = MYSQLProductQueryRepository;
class MYSQLProductCommandRepository extends repo_sequelize_1.BaseCommandRepositorySequelize {
    sequelize;
    modelName;
    constructor(sequelize, modelName) {
        super(sequelize, modelName);
        this.sequelize = sequelize;
        this.modelName = modelName;
    }
}
exports.MYSQLProductCommandRepository = MYSQLProductCommandRepository;
//# sourceMappingURL=mysql-repo.js.map