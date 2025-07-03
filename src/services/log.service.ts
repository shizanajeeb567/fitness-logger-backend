import WorkoutLogModel from '../models/Log.model';
import {IWorkoutLog} from '../models/Log.model';

interface WorkoutQuery{
    day?: string;
    month?: string;
    year?: string;
}

export const createWorkout= async(
    userId: string, 
    data: Partial<IWorkoutLog>
)=>{
    const logData = {
        ...data,
        user: userId,
    };
      const newLog = await WorkoutLogModel.create(logData);
  return newLog;
};

export const getWorkouts = async (userId: string, query: WorkoutQuery) => {
  const filter: any = { user: userId };

  if (query.day || query.month || query.year) {
    const today = new Date();
    const year = parseInt(query.year || today.getFullYear().toString());
    const month = parseInt(query.month || (today.getMonth() + 1).toString());
    const day = parseInt(query.day || '1');

    // 👇 FIX: subtract 1 from month
    const start = new Date(year, month - 1, day);
    const end = new Date(start);

    if (query.day) {
      end.setDate(end.getDate() + 1);
    } else if (query.month) {
      end.setMonth(end.getMonth() + 1);
    } else {
      end.setFullYear(end.getFullYear() + 1);
    }

    filter.date = { $gte: start, $lt: end };
  }

  const logs = await WorkoutLogModel.find(filter).sort({ date: -1 });
  return logs;
};
