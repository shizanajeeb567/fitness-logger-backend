import { Router } from 'express';
import { authenticate } from '../middleware/auth';
import { createWorkoutLog, getWorkoutLogs } from '../controllers/log.controller';

const router = Router();

router.post('/logs', authenticate, createWorkoutLog);
router.get('/logs', authenticate, getWorkoutLogs);

export default router;
