import "reflect-metadata"
import express from "express"
import 'express-async-errors'
import usersRoute from "./Routes/users.route"
import loginRoutes from "./Routes/login.routes"

const app = express()
app.use(express.json())

app.use('/users', usersRoute)
app.use('/login', loginRoutes)


export default app