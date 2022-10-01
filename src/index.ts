import express from "express";
import cors from 'cors';
import config from "./config/config";
import indexRouter from './routes/index-router';

const app = express();
app.use(cors());
app.use(express.json());
app.use('/', indexRouter);



const port = config.api.port || 3000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})
