"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MYSQLUserQueryRepository = exports.MYSQLUserCommandRepository = exports.MySQLUserRepository = void 0;
const repo_sequelize_1 = require("../../../../../share/repository/repo-sequelize");
class MySQLUserRepository extends repo_sequelize_1.BaseRepositorySequelize {
    sequelize;
    modelName;
    constructor(sequelize, modelName) {
        super(new MYSQLUserQueryRepository(sequelize, modelName), new MYSQLUserCommandRepository(sequelize, modelName));
        this.sequelize = sequelize;
        this.modelName = modelName;
    }
}
exports.MySQLUserRepository = MySQLUserRepository;
class MYSQLUserCommandRepository extends repo_sequelize_1.BaseCommandRepositorySequelize {
    sequelize;
    modelName;
    constructor(sequelize, modelName) {
        super(sequelize, modelName);
        this.sequelize = sequelize;
        this.modelName = modelName;
    }
}
exports.MYSQLUserCommandRepository = MYSQLUserCommandRepository;
class MYSQLUserQueryRepository extends repo_sequelize_1.BaseQueryRepositorySequelize {
    sequelize;
    modelName;
    constructor(sequelize, modelName) {
        super(sequelize, modelName);
        this.sequelize = sequelize;
        this.modelName = modelName;
    }
}
exports.MYSQLUserQueryRepository = MYSQLUserQueryRepository;
//# sourceMappingURL=index.js.map