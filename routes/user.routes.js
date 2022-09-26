
import express from 'express'
import { login, signup } from '../api/user.api.js'



const userRoutes =express.Router()



userRoutes.get("/login", login)
userRoutes.post("/signup", signup)



export default userRoutes