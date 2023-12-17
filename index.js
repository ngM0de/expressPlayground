import express from 'express';
import {listen} from "./utils/app.utils.js";
import {appRouter} from "./app.router.js";
import cors from 'cors'
import bodyParser from "body-parser";

const port = process.env.PORT || 3000;
const app = express();
app.use(cors({origins: ['https://first-angular-docker.onrender.com','http://localhost:4200']}))
app.use(bodyParser.json())
app.use('/api', appRouter)
app.listen(port, listen)
