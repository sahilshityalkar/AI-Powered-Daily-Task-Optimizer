import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes';

dotenv.config();

const app = express();

app.use(bodyParser.json());

// Use the user routes
app.use('/users', userRoutes);

export default app;