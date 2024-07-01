import { Router } from 'express';

import CreateUserController from './controllers/user/CreateUserController';
import AuthUserController from './controllers/user/AuthUserController';
import DetailUserController from './controllers/user/DetailUserController';

import CreateCategoryController from './controllers/category/CreateCategoryController';
import ListCategoryController from './controllers/category/ListCategoryController';

import CreateProductController from './controllers/product/CreateProductController';

import { isAuthenticated } from './middlewares/isAuthenticated';


const router = Router();

// user routes
router.post('/users', CreateUserController.handle);
router.post('/session', AuthUserController.handle);
router.get('/userinfo', isAuthenticated, DetailUserController.handle);

// category routes
router.post('/category', isAuthenticated, CreateCategoryController.handle);
router.get('/category', isAuthenticated, ListCategoryController.handle);

//product routes
router.post('/product', isAuthenticated, CreateProductController.handle);


export { router };