import { Request, Response } from 'express';
import CreateProductService from '../../services/product/CreateProductService';

class CreateProductController{
    async handle(req: Request, res: Response){
        const { name, price, description, category_id } = req.body;
        let banner = '';

        const product = await CreateProductService.execute({
            name,
            price,
            description,
            category_id,
            banner
        });

        return res.json(product);
    }
}

export default new CreateProductController();