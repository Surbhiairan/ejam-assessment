import { Router } from 'express';
import TemplateController from '../controllers/template.controller'

const templateRoutes = Router()
const templateController = new TemplateController()

templateRoutes.get('/', templateController.getAllTemplates)

export default templateRoutes