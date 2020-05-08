import * as express from "express";
import * as bodyParser from "body-parser";
import * as mongoose from 'mongoose'
import * as cors from 'cors'
import * as path from 'path'

import router from "./routes/index";
import { config } from './config'

class App {

    public app: express.Application;
    public mongoUrl: string = config.db.uri;  


    constructor() {
        this.app = express();
        this.config();    
        this.mongoSetup()    
    }

    private config(): void{
        // support application/json type post data
        this.app.use(bodyParser.json());
        //support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({ extended: false }));

        this.app.use(cors())

        this.app.use('/api', router)

        this.app.use(express.static(path.join(__dirname, 'client/build')));

        if(process.env.NODE_ENV === 'production') {
            this.app.use(express.static(path.join(__dirname, 'client/build')));
            //
            this.app.get('*', (req, res) => {
              res.sendFile(path.join(__dirname + 'client/build/index.html'));
            })
          }
          //build mode
          this.app.get('*', (req, res) => {
            res.sendFile(path.join(__dirname+ 'client/build/index.html'));
          })        
    }

    private mongoSetup = (): void => {
        mongoose.Promise = global.Promise;
        mongoose.connect(this.mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true});    
    }

}

export default new App().app;