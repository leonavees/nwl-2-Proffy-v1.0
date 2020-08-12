import { Router } from 'express';

import ClassController from './app/controllers/ClassController';
import ConnectionController from './app/controllers/ConnectionController';

const router = Router();

router.get('/classes', ClassController.index);
router.post('/classes', ClassController.store);

router.get('/connections', ConnectionController.index);
router.post('/connections', ConnectionController.store);

export default router;
