import express, { Request, Response, NextFunction} from 'express';

import userRoute from './routes/user.route';


const app = express();

app.use(userRoute);


app.get('/status', (req: Request, res: Response, next: NextFunction) => {
	res.status(200).send({ foo: 'Sucesso total!!!' });
});




app.listen(3000, () => {
	console.log('Server runninng at localhost:3000');
});






