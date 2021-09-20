import express, { Request, Response, NextFunction} from 'express';

import userRoute from './routes/user.route';


const app = express();

// Middleware Express para configurar recebimento de json
// Tem de vir por primeiro na ordem
app.use(express.json());

// Middleware para configurar o parseamento de requests com urlencoded payloads
//app.use(express.urlencoded({ extended: true }));



// Configuração das Rotas
app.use(userRoute);



app.get('/status', (req: Request, res: Response, next: NextFunction) => {
	res.status(200).send({ foo: 'Sucesso total!!!' });
});


app.listen(3000, () => {
	console.log('Server runninng at localhost:3000');
});






