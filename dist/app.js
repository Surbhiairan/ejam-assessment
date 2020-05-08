"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
//import router from "./routes/index";
const index_1 = require("./routes/index");
class App {
    constructor() {
        this.app = express();
        this.apiRoutes = new index_1.default();
        this.config();
    }
    config() {
        // support application/json type post data
        this.app.use(bodyParser.json());
        //support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.use('/api', this.apiRoutes.routes);
    }
}
exports.default = new App().app;
//# sourceMappingURL=app.js.map