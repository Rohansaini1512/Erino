import express from 'express';
import cors from 'cors'
import cookieParser from 'cookie-parser';
import { config } from 'dotenv';
import morgan from 'morgan';
import contactRoute from "./router/contact.router.js";



config();

const app = express();

app.use(express.json());

app.use(cors({
    origin: [process.env.FRONTEND_URL],
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
}));

app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

app.use(morgan('dev'));

app.use('/api/contact' , contactRoute);

app.use('/ping', (req,res) => {
    res.send('Pong');
});



app.all('*', (req,res) => {
    res.status(404).send('OOPS!! 404 page not found');
});

// app.use(errorMiddleware);

export default  app;