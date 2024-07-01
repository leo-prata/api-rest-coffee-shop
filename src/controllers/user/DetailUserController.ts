import { Request, Response } from 'express';
import DetailUserService from '../../services/user/DetailUserService';

class DetailUserController{
    async handle(req: Request, res: Response){
        
        const user_id = req.user_id;

        const user = await DetailUserService.execute(user_id);
        return res.json(user);
    }
}

export default new DetailUserController();