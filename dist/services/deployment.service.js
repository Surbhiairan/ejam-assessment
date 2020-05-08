"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const deployment_1 = require("../modals/deployment");
class DeploymentService {
    constructor() {
        this.getDeployments = () => {
            return new Promise((resolve, reject) => {
                deployment_1.Deployment.find({}, (err, deploments) => {
                    if (err) {
                        reject(err);
                    }
                    else {
                        resolve(deploments);
                    }
                });
            });
        };
        this.addDeployment = (payload) => {
            return new Promise((resolve, reject) => {
                let newDeployment = new deployment_1.Deployment(payload);
                newDeployment.save((err, deployment) => {
                    if (err)
                        reject(err);
                    else
                        resolve(deployment);
                });
            });
        };
        this.deleteDeployemnt = (id) => {
            return new Promise((resolve, reject) => {
                deployment_1.Deployment.deleteOne({ _id: id }, (err, deployment) => {
                    if (err)
                        reject(err);
                    else
                        resolve(deployment);
                });
            });
        };
    }
}
exports.default = DeploymentService;
//# sourceMappingURL=deployment.service.js.map