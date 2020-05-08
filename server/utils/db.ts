import * as mongoose from 'mongoose'
import { config } from '../config'

mongoose.connect(config.db.uri, { useNewUrlParser: true, useUnifiedTopology: true});


class Db {

    constructor() {
        this.getConnection()
    }

    public getConnection = (): Promise<any> => {
        return new Promise((resolve, reject) => {
            var db = mongoose.connection;
                return resolve(db);
        });
    }
}

export default Db