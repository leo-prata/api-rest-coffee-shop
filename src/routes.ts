import { Router } from 'express';
import multer from 'multer';

import CreateUserController from './controllers/user/CreateUserController';
import AuthUserController from './controllers/user/AuthUserController';
import DetailUserController from './controllers/user/DetailUserController';

import CreateCategoryController from './controllers/category/CreateCategoryController';
import ListCategoryController from './controllers/category/ListCategoryController';

import CreateProductController from './controllers/product/CreateProductController';
import ListByCategoryController from './controllers/product/ListByCategoryController';

import CreateOrderController from './controllers/order/CreateOrderController';
import RemoveOrderController from './controllers/order/RemoveOrderController';
import AddItemController from './controllers/order/AddItemController';
import RemoveItemController from './controllers/order/RemoveItemController';
import SendOrderController from './controllers/order/SendOrderController';
import ListOrdersController from './controllers/order/ListOrdersController';
import DetailOrderController from './controllers/order/DetailOrderController';
import FinishOrderController from './controllers/order/FinishOrderController';

import { isAuthenticated } from './middlewares/isAuthenticated';

import uploadConfig from './config/multer';



const router = Router();

const upload = multer(uploadConfig.upload("./tmp"));

// user routes
router.post('/users', CreateUserController.handle);
router.post('/session', AuthUserController.handle);
router.get('/userinfo', isAuthenticated, DetailUserController.handle);

// category routes
router.post('/category', isAuthenticated, CreateCategoryController.handle);
router.get('/category', isAuthenticated, ListCategoryController.handle);

// product routes
router.post('/product', isAuthenticated, upload.single('file'), CreateProductController.handle);
router.get('/category/product', isAuthenticated, ListByCategoryController.handle);

// order routes
router.post('/order', isAuthenticated, CreateOrderController.handle);
router.delete('/order', isAuthenticated, RemoveOrderController.handle);
router.post('/order/add', isAuthenticated, AddItemController.handle);
router.delete('/order/remove', isAuthenticated, RemoveItemController.handle);
router.put('/order/send', isAuthenticated, SendOrderController.handle);
router.get('/orders', isAuthenticated, ListOrdersController.handle);
router.get('/order/detail', isAuthenticated, DetailOrderController.handle);
router.put('/order/finish', isAuthenticated, FinishOrderController.handle);


export { router };