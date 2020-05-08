"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const TemplateSchema = new Schema({
    name: {
        type: String,
    },
    versions: [{
            type: String
        }]
});
exports.Template = mongoose.model('templates', TemplateSchema);
//# sourceMappingURL=template.js.map