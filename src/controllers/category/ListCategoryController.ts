import { Request, Response } from 'express';
import ListCategoryService from '../../services/category/ListCategoryService';

class ListCategoryController{
    async handle(req: Request, res: Response){
        const category = await ListCategoryService.execute();
        return res.json(category);
    }
}

export default new ListCategoryController();