"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MYSQLCategoryCommandRepository = exports.MYSQLCategoryQueryRepository = exports.MySQLCategoryRepository = void 0;
const repo_sequelize_1 = require("../../../../share/repository/repo-sequelize");
class MySQLCategoryRepository extends repo_sequelize_1.BaseRepositorySequelize {
    sequelize;
    modelName;
    constructor(sequelize, modelName) {
        super(new MYSQLCategoryQueryRepository(sequelize, modelName), new MYSQLCategoryCommandRepository(sequelize, modelName));
        this.sequelize = sequelize;
        this.modelName = modelName;
    }
}
exports.MySQLCategoryRepository = MySQLCategoryRepository;
class MYSQLCategoryQueryRepository extends repo_sequelize_1.BaseQueryRepositorySequelize {
    sequelize;
    modelName;
    constructor(sequelize, modelName) {
        super(sequelize, modelName);
        this.sequelize = sequelize;
        this.modelName = modelName;
    }
}
exports.MYSQLCategoryQueryRepository = MYSQLCategoryQueryRepository;
class MYSQLCategoryCommandRepository extends repo_sequelize_1.BaseCommandRepositorySequelize {
    sequelize;
    modelName;
    constructor(sequelize, modelName) {
        super(sequelize, modelName);
        this.sequelize = sequelize;
        this.modelName = modelName;
    }
}
exports.MYSQLCategoryCommandRepository = MYSQLCategoryCommandRepository;
//# sourceMappingURL=repo.js.map