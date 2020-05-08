import { Request, Response, Router } from "express";
import deploymentRoutes from './deploymentRoutes'
import templateRoutes from './templateRoutes'

const router = Router()

router.get('/ping', (req: Request, res: Response) =>
    res.status(200).send({
        message: 'GET request successfulll!!!!'
    })
);

router.use('/deployment', deploymentRoutes)
router.use('/template', templateRoutes)

export default router
