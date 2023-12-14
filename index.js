import express from 'express';
import {listen} from "./utils/app.utils.js";
import {appRouter} from "./app.router.js";
import cors from 'cors'
import bodyParser from "body-parser";

const port = process.env.PORT || 3000;
const app = express();
app.use(cors())
app.use(bodyParser.json())
app.use('/api', appRouter)
app.listen(port, listen)
