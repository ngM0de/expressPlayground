import express from "express";

const appRouter = express.Router();

appRouter.get('/', (req, res) => {
    res.json(`This is root route`)
})
appRouter.get('/page', (req, res) => {
    res.json(`This is page route`)
})



export {appRouter}