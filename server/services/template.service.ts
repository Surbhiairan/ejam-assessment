import { Template } from '../modals/template'

class TemplateService {

    /**
     * getTemplates = 
     */
    public getTemplates = (): Promise<any> => {
        return new Promise((resolve, reject) => {
            Template.find({}, (err, templates) => {
                if(err) reject(err)
                else resolve(templates)
            })
        })
    }
}

export default TemplateService