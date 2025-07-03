import { Request, Response } from 'express';
import * as statsService from '../services/stats.service';

export const getMonthlyStats = async (req: Request, res: Response) => {
  try {
    const result = await statsService.getMonthlyCalories(req.user.id, req.query.month as string);
    res.status(200).json(result);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

export const getMostFrequentWorkout = async (req: Request, res: Response) => {
  try {
    const result = await statsService.getMostFrequent(req.user.id);
    res.status(200).json(result);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};
