import { Request, Response, NextFunction, Router } from 'express';


// get 		/users
// get 		/users/:uuid
// post	 	/users
// put 		/users/:uuid
// delete /users/:uuid


const usersRoute = Router();

usersRoute.get('/users', (req: Request, res: Response, next: NextFunction) => {
	const users = [{ userName: 'Renan' }];
	
	res.status(200).send({ users });
});



export default usersRoute;





