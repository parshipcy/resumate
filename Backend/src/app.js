const express = require("express")
const cookieParser = require("cookie-parser")
const cors = require("cors")

const app = express()

app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}))

const authRouter = require("./routes/auth.routes") //we require all the routes here
const interviewRouter = require("./routes/interview.routes")

app.use("/api/auth", authRouter) //we use all the routes here
app.use("/api/interview", interviewRouter)

module.exports = app
