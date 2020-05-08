"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const template_controller_1 = require("../controllers/template.controller");
const templateRoutes = express_1.Router();
const templateController = new template_controller_1.default();
templateRoutes.get('/', templateController.getAllTemplates);
exports.default = templateRoutes;
//# sourceMappingURL=templateRoutes.js.map