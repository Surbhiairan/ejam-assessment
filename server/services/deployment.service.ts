import { Deployment } from '../modals/deployment'

export default class DeploymentService {
    
    public getDeployments = (): Promise<any> => {
        return new Promise((resolve, reject) => {
            Deployment.find({}, (err, deploments) => {
                if(err) {
                    reject(err)
                } else {
                    resolve(deploments)
                }
            })
        })
    }

    public addDeployment = (payload): Promise<any> => {
        return new Promise((resolve, reject) => {
            let newDeployment = new Deployment(payload)
            newDeployment.save((err, deployment) => {
                if(err) reject(err)
                else resolve(deployment)
            })
        })
    }

    public deleteDeployemnt = (id): Promise<any> => {
        return new Promise((resolve, reject) => {
            Deployment.deleteOne({_id: id}, (err, deployment) => {
                if(err) reject(err)
                else resolve(deployment)
            })
        })
    }

}