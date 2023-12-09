import express from "express";

const appRouter = express.Router();

appRouter.get('/', (req, res) => {
    console.log(`recived request`)
    res.json(`Just test message`)
})

export {appRouter}