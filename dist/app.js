"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const index_1 = require("./routes/index");
const config_1 = require("./config");
class App {
    constructor() {
        this.mongoUrl = config_1.config.db.uri;
        this.mongoSetup = () => {
            mongoose.Promise = global.Promise;
            mongoose.connect(this.mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true });
        };
        this.app = express();
        this.config();
        this.mongoSetup();
    }
    config() {
        // support application/json type post data
        this.app.use(bodyParser.json());
        //support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.use(cors());
        this.app.use('/api', index_1.default);
        this.app.use(express.static(path.join(__dirname, './client/build')));
        if (process.env.NODE_ENV === 'production') {
            this.app.use(express.static(path.join(__dirname, './client/build')));
            //
            this.app.get('*', (req, res) => {
                res.sendfile(path.join(__dirname = './client/build/index.html'));
            });
        }
        //build mode
        this.app.get('/*', (req, res) => {
            res.sendFile(path.join(__dirname + './client/build/index.html'));
        });
        this.app.use(express.static(path.join(__dirname, 'client/build')));
    }
}
exports.default = new App().app;
//# sourceMappingURL=app.js.map