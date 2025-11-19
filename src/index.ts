import express, { type Request, type Response } from 'express';
import 'dotenv/config';
const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());

app.get('/', (_req: Request, res: Response) => {
	res.json({ message: 'Hello, World!' });
});

app.listen(PORT, () => {
	// eslint-disable-next-line no-console
	console.log(`Server is running on port ${PORT}🚀`);
});
