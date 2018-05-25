import * as express from 'express';
class App {
    public express: express.Application;

    constructor() {
        this.express = express();
        this.middleare();
    }
    private middleare(): void {
        this.express.use('/hello', (req, res, next) => {
            res.send("helloWorld");
        })
    }
}
export default new App().express