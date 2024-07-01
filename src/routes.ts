import { Router } from 'express';

import CreateUserController from './controllers/user/CreateUserController';
import AuthUserController from './controllers/user/AuthUserController';
import DetailUserController from './controllers/user/DetailUserController';

import { isAuthenticated } from './middlewares/isAuthenticated';

const router = Router();

router.post('/users', CreateUserController.handle);
router.post('/session', AuthUserController.handle);
router.get('/userinfo', isAuthenticated, DetailUserController.handle);

export { router };