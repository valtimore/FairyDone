import express from 'express';
import morgan from 'morgan';
import authRoutes from './routes/auth.routes.js';
import cookieParser from 'cookie-parser';
import taskRoutes from './routes/tasks.routes.js';
import cors from 'cors';

const app = express();

app.use(cors({
    origin: 'http://localhost:5173', // frontend URL
    credentials: true, // Allow credentials (cookies, authorization headers, etc.)
})); // Enable CORS for all routes
app.use(morgan('dev')); // Logging middleware
app.use(express.json()); // Middleware to parse JSON bodies
app.use(cookieParser()); // Middleware to parse cookies

app.use("/api", authRoutes);
app.use("/api", taskRoutes);


export default app;