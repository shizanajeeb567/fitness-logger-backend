import PlanModel, { IWeeklyPlan } from '../models/Plan.model';

interface IPlanDay {
  type: string;
  exercises: string[];
  targetCalories?: number;
}

export const createPlan= async(userId: string, data: Partial<IWeeklyPlan>)=>{
  const newPlan = await PlanModel.create({
    ...data,
    user:userId
  });
  return newPlan;
};

export const getPlan = async (userId: string, week: string) => {
  const plan = await PlanModel.findOne({ user: userId, week });
  if (!plan) throw new Error("No weekly plan found for this week");
  return plan;
};

export const updateDay = async (
  userId: string,
  day: string,
  dayData: IPlanDay
) => {
  const plan = await PlanModel.findOne({ user: userId });
  if (!plan) throw new Error("Weekly plan not found");

  plan.days.set(day, dayData); // set plan for the given day
  await plan.save();

  return plan;
};
