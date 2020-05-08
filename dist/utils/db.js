"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const config_1 = require("../config");
mongoose.connect(config_1.config.db.uri, { useNewUrlParser: true, useUnifiedTopology: true });
class Db {
    constructor() {
        this.getConnection = () => {
            return new Promise((resolve, reject) => {
                var db = mongoose.connection;
                return resolve(db);
            });
        };
        this.getConnection();
    }
}
exports.default = Db;
//# sourceMappingURL=db.js.map