import WorkoutLogModel from '../models/Log.model';
import { IWorkoutLog } from '../models/Log.model';

// Get total calories burned in a given month (YYYY-MM)
export const getMonthlyCalories = async (userId: string, month: string) => {
  const [year, monthIndex] = month.split('-').map(Number);

  const startDate = new Date(year, monthIndex - 1, 1);
  const endDate = new Date(year, monthIndex, 1); // start of next month

  const logs = await WorkoutLogModel.find({
    user: userId,
    date: { $gte: startDate, $lt: endDate },
  });

  const totalCalories = logs.reduce((sum, log) => sum + log.caloriesBurned, 0);

  return {
    month,
    totalCalories,
    workouts: logs.length,
  };
};

// Get most frequently logged workout type (e.g., "Leg Day", "Cardio")
export const getMostFrequent = async (userId: string) => {
  const logs = await WorkoutLogModel.find({ user: userId });

  const typeCount: { [type: string]: number } = {};

  for (const log of logs) {
    typeCount[log.type] = (typeCount[log.type] || 0) + 1;
  }

  const mostFrequentType = Object.entries(typeCount).reduce((a, b) =>
    b[1] > a[1] ? b : a
  )[0];

  return {
    mostFrequentType,
    count: typeCount[mostFrequentType] || 0,
  };
};
