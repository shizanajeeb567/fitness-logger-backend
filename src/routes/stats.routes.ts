import { Router } from 'express';
import { getMonthlyStats, getMostFrequentWorkout } from '../controllers/stats.controller';
import { authenticate } from '../middleware/auth';

const router = Router();

router.get('/stats/monthly', authenticate, getMonthlyStats);
router.get('/stats/frequent', authenticate, getMostFrequentWorkout);

export default router;
