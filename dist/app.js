"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
class App {
    constructor() {
        this.express = express();
        this.middleare();
    }
    middleare() {
        this.express.use('/hello', (req, res, next) => {
            res.send("helloWorld");
        });
    }
}
exports.default = new App().express;
