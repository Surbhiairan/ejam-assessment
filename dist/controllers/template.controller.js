"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const template_service_1 = require("../services/template.service");
class TemplateController {
    constructor() {
        /**
         * getAllTemplates
         */
        this.getAllTemplates = (req, res) => {
            this.templateService.getTemplates().then(response => {
                res.status(200).json(response);
            })
                .catch(err => {
                res.status(500).json(err);
            });
        };
        this.templateService = new template_service_1.default();
    }
}
exports.default = TemplateController;
//# sourceMappingURL=template.controller.js.map