import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

const DeploymentSchema = new Schema({
    url: {
        type: String,
    },
    templateName: {
        type: String,
    },
    version: {
        type: String            
    },
    deployedAt: {
        type: Date,
        default: Date.now
    }
});
export const Deployment = mongoose.model('deployments', DeploymentSchema);
