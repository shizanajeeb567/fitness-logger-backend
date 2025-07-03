import { Router } from 'express';
import { createWeeklyPlan, getWeeklyPlan, updatePlanDay } from '../controllers/plan.controller';
import { authenticate } from '../middleware/auth';

const router = Router();

router.post('/plan', authenticate, createWeeklyPlan);
router.get('/plan', authenticate, getWeeklyPlan);
router.put('/plan/:day', authenticate, updatePlanDay);

export default router;
