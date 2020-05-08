import { Request, Response, response } from "express";
import TemplateService from '../services/template.service'

export default class TemplateController {
    public templateService: TemplateService
    constructor() {
        this.templateService = new TemplateService()
    }

    /**
     * getAllTemplates
     */
    public getAllTemplates = (req: Request, res: Response): void => {
        this.templateService.getTemplates().then(response => {
            res.status(200).json(response)
        })
        .catch(err => {
            res.status(500).json(err)
        })
    }
}