import express, { Express } from 'express';
import cors from 'cors';

import router from './routes';

class App {
    server: Express;

    constructor() {
        this.server = express();

        this.middlewares();
        this.routes();
    }

    private middlewares(): void {
        this.server.use(cors());
        this.server.use(express.json());
    }

    private routes(): void {
        this.server.use('/api', router);
    }
}

export default new App().server;
