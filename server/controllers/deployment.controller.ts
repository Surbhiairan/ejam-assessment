import { Request, Response, response } from "express";
import DeploymentService from '../services/deployment.service'

export default class DeploymentContoller {
    public deployService: DeploymentService
    constructor() {
        this.deployService = new DeploymentService()
    }
    public welcomeMessage(req: Request, res: Response) {
        return res.status(200).send("Welcome to pokeAPI REST by Nya ^^");
    }

    public getDeployments = (req: Request, res: Response): void => {
        this.deployService.getDeployments().then(response => {
            res.status(200).json(response)
        })
        .catch(err => {
            res.status(500).json(err)
        })
    }

    /**
     * addDeployment 
     * 
        */
    public addDeployment = (req: Request, res: Response): void => {
        this.deployService.addDeployment(req.body).then(response => {
            res.status(200).json(response)
        })
        .catch(err => {
            res.status(500).json(err)
        })
    }

    /**
     * deleteDeployment = 
  =>    */
    public deleteDeployment = (req: Request, res: Response): void => {
        this.deployService.deleteDeployemnt(req.params.id).then(response => {
            res.status(200).json(response)
        })
        .catch(err => {
            res.status(500).json(err)
        })
    }
}