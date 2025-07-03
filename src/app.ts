import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db';
import authRoutes from './routes/auth.routes';
import logRoutes from './routes/logs.routes';
import planRoutes from './routes/plan.routes';
import statsRoutes from './routes/stats.routes';

dotenv.config();
connectDB();

const app = express();

app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api/logs', logRoutes);
app.use('/api/plan', planRoutes);
app.use('/api/stats', statsRoutes);

// Basic route
app.get('/', (req, res) => {
  res.send('API is running...');
});

export default app;
