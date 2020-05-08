"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const deploymentRoutes_1 = require("./deploymentRoutes");
const templateRoutes_1 = require("./templateRoutes");
const router = express_1.Router();
router.get('/ping', (req, res) => res.status(200).send({
    message: 'GET request successfulll!!!!'
}));
router.use('/deployment', deploymentRoutes_1.default);
router.use('/template', templateRoutes_1.default);
exports.default = router;
//# sourceMappingURL=index.js.map