"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const deployment_service_1 = require("../services/deployment.service");
class DeploymentContoller {
    constructor() {
        this.getDeployments = (req, res) => {
            this.deployService.getDeployments().then(response => {
                res.status(200).json(response);
            })
                .catch(err => {
                res.status(500).json(err);
            });
        };
        /**
         * addDeployment
         *
            */
        this.addDeployment = (req, res) => {
            this.deployService.addDeployment(req.body).then(response => {
                res.status(200).json(response);
            })
                .catch(err => {
                res.status(500).json(err);
            });
        };
        /**
         * deleteDeployment =
      =>    */
        this.deleteDeployment = (req, res) => {
            this.deployService.deleteDeployemnt(req.params.id).then(response => {
                res.status(200).json(response);
            })
                .catch(err => {
                res.status(500).json(err);
            });
        };
        this.deployService = new deployment_service_1.default();
    }
    welcomeMessage(req, res) {
        return res.status(200).send("Welcome to pokeAPI REST by Nya ^^");
    }
}
exports.default = DeploymentContoller;
//# sourceMappingURL=deployment.controller.js.map