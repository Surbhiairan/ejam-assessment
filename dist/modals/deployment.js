"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const DeploymentSchema = new Schema({
    url: {
        type: String,
    },
    templateName: {
        type: String,
    },
    version: {
        type: String
    },
    deployedAt: {
        type: Date,
        default: Date.now
    }
});
exports.Deployment = mongoose.model('deployments', DeploymentSchema);
//# sourceMappingURL=deployment.js.map