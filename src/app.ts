import express, { Request, Response } from 'express';
import dotenv from 'dotenv-safe';

dotenv.config();
const app = express();

app.get('/', (req: Request, res: Response) => {
  res.send('🍕');
});

export default app;
