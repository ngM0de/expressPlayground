import express from 'express';
import {listen} from "./utils/app.utils.js";
import {appRouter} from "./app.router.js";

const app = express();
app.use('/app', appRouter)
app.listen(3000, listen)
