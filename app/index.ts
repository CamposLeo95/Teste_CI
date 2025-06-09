import { Request, Response } from "express";
import express from 'express';
import 'dotenv/config';

// console.log('Starting the application...');

const app = express();
app.get('/', (req: Request, res: Response) => {
  res.send('Hello, World!');

});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Server is running on http://localhost:3000');
});