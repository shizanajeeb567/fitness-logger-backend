import { Request, Response } from 'express';
import * as logService from '../services/log.service';

export const createWorkoutLog = async (req: Request, res: Response) => {
  try {
    const result = await logService.createWorkout(req.user.id, req.body);
    res.status(201).json(result);
  } catch (error: any) {
    res.status(400).json({ message: error.message || 'Cannot create workout log' });
  }
};

export const getWorkoutLogs = async (req: Request, res: Response) => {
  try {
    const result = await logService.getWorkouts(req.user.id, req.query);
    res.status(200).json(result);
  } catch (error: any) {
    res.status(400).json({ message: error.message || 'Cannot get workouts' });
  }
};
