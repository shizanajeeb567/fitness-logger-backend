import mongoose, {Schema, Document} from 'mongoose';
 interface IExercise{
    name: string;
    sets?: number;
    reps?: number;
    weight?: number;
    duration?: number;
 }

 export interface IWorkoutLog extends Document{
    user: mongoose.Types.ObjectId;
    date: Date;
    type: string;
    exercises:IExercise[];
    caloriesBurned: number;
 }

 const logSchema= new Schema<IWorkoutLog>({
    user:{
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    date:{
        type: Date, 
        required: true
    },
    type:{
        type: String,
        required: true
    },
    exercises:[
        {
            name:{
                type: String, 
                required: true
            },
            sets:Number,
            reps:Number,
            weight:Number,
            duration: Number
        }
    ],
    caloriesBurned:{
        type: Number,
        required: true
    }
 })
 export default mongoose.model<IWorkoutLog>('WorkoutLog', logSchema);