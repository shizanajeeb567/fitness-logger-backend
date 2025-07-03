import mongoose, { Schema, Document } from 'mongoose';

interface IPlanDay {
  type: string;
  exercises: string[];
  targetCalories?: number;
}

export interface IWeeklyPlan extends Document {
  user: mongoose.Types.ObjectId;
  week: string;
  days: Map<string, IPlanDay>;
}

// Define the sub-schema for a plan day
const planDaySchema = new Schema<IPlanDay>({
  type: { type: String, required: true },
  exercises: [String],
  targetCalories: Number,
});

// Define the main weekly plan schema
const planSchema = new Schema<IWeeklyPlan>({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  week: {
    type: String,
    required: true,
  },
  days: {
    type: Map,
    of: planDaySchema, 
  },
});

export default mongoose.model<IWeeklyPlan>('Plan', planSchema);
