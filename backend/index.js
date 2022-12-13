import express from "express";
import cors from "cors"
import session from "express-session";
import dotenv from 'dotenv'
import db from "./config/database.js";
import SequelizeStore from "connect-session-sequelize"
import userroute from './routes/userroute.js'
import authroute from "./routes/AuthRoute.js";


dotenv.config()

const app = express()

const sessionStore = SequelizeStore(session.Store)

const Store = new sessionStore ({
    db: db
})

//;(async() => {
//    await db.sync()
//})()

app.use(session({
    secret: process.env.SESS_SECRET,
    resave: false,
    saveUninitialized: true,
    store: Store,
    cookie: {
        secure: 'auto'
    }
}))

app.use(cors({
    confidentials : true,
    origin : 'http://localhost:3000'
}))

app.use(express.json())
app.use(userroute)
app.use(authroute)

//Store.sync()

app.listen(process.env.APP_PORT, () => {
    console.log('Server up and running...')
})