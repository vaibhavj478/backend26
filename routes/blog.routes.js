import express from 'express'
import { createBlog, getBlog, deleteBlog ,myBlog} from '../api/blog.api.js'
import isAuth from '../middlewares/isAuth.js'



const blogRoutes =express.Router()

blogRoutes.post("", isAuth, createBlog )

blogRoutes.get("", isAuth,getBlog)

blogRoutes.get("/myBlog", isAuth, myBlog)

blogRoutes.delete("", isAuth,deleteBlog)


export default blogRoutes
