import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

const TemplateSchema = new Schema({
    name: {
        type: String,
    },
    versions: [{
        type: String            
    }]
});
export const Template = mongoose.model('templates', TemplateSchema);
