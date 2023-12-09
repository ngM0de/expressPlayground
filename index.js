import express from 'express';
import {listen} from "./utils/app.utils.js";
import {appRouter} from "./app.router.js";

const port = process.env.PORT || 3000;
const app = express();
app.use('/app', appRouter)
app.listen(port, listen)
