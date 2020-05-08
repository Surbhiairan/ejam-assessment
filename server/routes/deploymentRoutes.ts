import { Router } from 'express';
import DeploymentContoller  from '../controllers/deployment.controller';

const deploymnetRouter = Router()
const deployController = new DeploymentContoller();

deploymnetRouter.get('/', deployController.getDeployments)
deploymnetRouter.post('/', deployController.addDeployment)
deploymnetRouter.delete('/:id', deployController.deleteDeployment)

export default deploymnetRouter

