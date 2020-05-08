"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const deployment_controller_1 = require("../controllers/deployment.controller");
const deploymnetRouter = express_1.Router();
const deployController = new deployment_controller_1.default();
deploymnetRouter.get('/', deployController.getDeployments);
deploymnetRouter.post('/', deployController.addDeployment);
deploymnetRouter.delete('/:id', deployController.deleteDeployment);
exports.default = deploymnetRouter;
//# sourceMappingURL=deploymentRoutes.js.map