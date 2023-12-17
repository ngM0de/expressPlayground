import express from "express";
import dotenv from 'dotenv'
import {getDb, findUserByIp, registerUser} from "./db.js";

dotenv.config()
const db = getDb()

const appRouter = express.Router();

appRouter.get('/', (req, res) => {
    res.json(`This is root route`)
})
appRouter.get('/page', (req, res) => {
    res.json(`This is page route`)
})


appRouter.get('/check-user', async (req, res) => {
    const ipAddress = req.header('x-forwarded-for') || req.socket.remoteAddress;
    // replace to regexp
    // if (ipAddress && ipAddress !== "::1" && ipAddress !== "127.0.0.1") {
    let response;
    try {
        response = await findUserByIp(db, ipAddress)
    } catch (e) {
        response = null;
    }
    if (response !== null && response.length >= 1) {
        const user = response[0]
        res.json({
            id: user.id,
            name: user.name,
            message: `Nice to see you again ${user.name}`
        })
    } else {
        res.json({
            message: `Welcome, what is your name?`
        })
    }
    // } else {
    //     res.status(401).error('Unauthorized')
    // }
})

appRouter.post('/register-user', async (req, res) => {
    const ipAddress = req.header('x-forwarded-for') || req.socket.remoteAddress;
    const post = await registerUser(db, {name: req.body.name, ip: ipAddress})
    try {
        res.json(post)
    } catch (e) {
        res.status(500).error(e.message)
    }
    // if (ipAddress && ipAddress !== "::1" && ipAddress !== "127.0.0.1") {

    // let user;
    // try {
    //     user = await findUserByIp(db)
    // } catch (e) {
    //     user = null;
    // }
    // if (user !== null) {
    //     res.json({
    //         user: {
    //             id: user.id,
    //             name: user.name
    //         },
    //         message: `Nice to see you again ${user.name}`
    //     })
    // } else {
    //     res.json({
    //         message: `Welcome, what is your name?`
    //     })
    // }
    // } else {
    //     res.status(401).error('Unauthorized')
    // }

})


export {appRouter}