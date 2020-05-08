"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const template_1 = require("../modals/template");
class TemplateService {
    constructor() {
        /**
         * getTemplates =
         */
        this.getTemplates = () => {
            return new Promise((resolve, reject) => {
                template_1.Template.find({}, (err, templates) => {
                    if (err)
                        reject(err);
                    else
                        resolve(templates);
                });
            });
        };
    }
}
exports.default = TemplateService;
//# sourceMappingURL=template.service.js.map