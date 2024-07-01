import { Request, Response } from 'express';
import DetailUserService from '../../services/user/DetailUserService';

class DetailUserController{
    async handle(req: Request, res: Response){
        const user = await DetailUserService.execute();
        return res.json(user);
    }
}

export default new DetailUserController();