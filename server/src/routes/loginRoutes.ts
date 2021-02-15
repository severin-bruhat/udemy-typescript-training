import { Router, Request, Response } from 'express';

const router  = Router();

router.get('/', (req: Request, res:Response) => {
    res.send(`
        <div>
            <h1>Hi there router!</h1>
        </div>
    `);
});

export { router };