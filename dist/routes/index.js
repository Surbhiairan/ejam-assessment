"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class ApiRoutes {
    constructor() {
        this.router = express_1.Router();
        this.routes();
    }
    routes() {
        this.router
            .get('/', (req, res) => {
            res.status(200).send({
                message: 'GET request successfulll!!!!'
            });
        });
    }
}
exports.default = ApiRoutes;
// router.get('/ping', (req: Request, res: Response) =>
//     res.status(200).send({
//         message: 'GET request successfulll!!!!'
//     })
// );
// export default router
//# sourceMappingURL=index.js.map