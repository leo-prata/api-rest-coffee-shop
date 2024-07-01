import express, { Request, Response, NextFunction } from 'express';
import 'express-async-errors';
import cors from 'cors';
import { router } from './routes';

const app = express();

app.use(express.json());
app.use(cors());

app.use(router);

app.use((e: Error, req: Request, res: Response, next: NextFunction) => {
    if(e instanceof Error){
        return res.status(400).json({
            error: e.message
        });
    }

    return res.status(500).json({
        status: 'error',
        message: 'internal server error'
    })
});

app.listen(3300, () => console.log('Listening on 3300'));