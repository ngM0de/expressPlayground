import express from "express";

const appRouter = express.Router();

appRouter.get('/', (req, res) => {
    res.json(`Just test message`)
})

export {appRouter}