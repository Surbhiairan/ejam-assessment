"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const deployment_controller_1 = require("../controllers/deployment.controller");
class DeploymentRoutes {
    constructor(app) {
        this.app = app;
        this.deployController = new deployment_controller_1.default();
        this.routes();
    }
    routes() {
        this.app.route('/').get(this.deployController.welcomeMessage);
    }
}
exports.default = DeploymentRoutes;
//# sourceMappingURL=deploymentRoutes.js.map