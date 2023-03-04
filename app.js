const express = require('express')
const app = express()
const session = require('express-session')
require("dotenv").config();
const cookieParser = require('cookie-parser')
const port = 3001
const dbConection = require('./database/dbConection')
const productsRouter = require('./routes/productsRouter')
const loginRouter = require('./routes/loginRouter')

app.use(express.json())
app.use(cookieParser())
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: true,
    saveUninitialized: true
}))

app.use ("/index", loginRouter)
app.use("/products", productsRouter)

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
})

dbConection();