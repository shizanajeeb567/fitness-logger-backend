import { Request, Response } from 'express';
import * as planService from '../services/plan.service';

export const createWeeklyPlan = async (req: Request, res: Response) => {
  try {
    const result = await planService.createPlan(req.user.id, req.body);
    res.status(201).json(result);
  } catch (error: any) {
    res.status(400).json({ message: error.message || 'Cannot create plan' });
  }
};

export const getWeeklyPlan = async (req: Request, res: Response) => {
  try {
    const result = await planService.getPlan(req.user.id, req.query.week as string);
    res.status(200).json(result);
  } catch (error: any) {
    res.status(400).json({ message: error.message || 'Cannot get plan' });
  }
};

export const updatePlanDay = async (req: Request, res: Response) => {
  try {
    const result = await planService.updateDay(req.user.id, req.params.day, req.body);
    res.status(200).json(result);
  } catch (error: any) {
    res.status(400).json({ message: error.message || 'Cannot update plan' });
  }
};
