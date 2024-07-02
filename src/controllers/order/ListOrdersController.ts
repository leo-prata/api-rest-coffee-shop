import { Request, Response } from 'express';
import ListOrdersServices from '../../services/order/ListOrdersServices';

class ListOrdersController{
    async handle(req: Request, res: Response){
        const orders = await ListOrdersServices.execute();
        return res.json(orders);
    }
}

export default new ListOrdersController();