
import express from 'express'

import dotenv from 'dotenv'
import connect from '../config/batabase.js';
import userRoutes from '../routes/user.routes.js';
import blogRoutes from '../routes/blog.routes.js';




const app = express()

app.use(express.json());


dotenv.config({path:"./config/.env"});

connect();



app.use("/user", userRoutes);


app.use("/blogs", blogRoutes );




console.log(process.env.PORT);


const port = process.env.PORT || 4000


app.listen(port, async()=>{

    try {
        
        console.log(`http://${process.env.Hostlocal}:${port}`);

    } catch (error) {
        console.log(error.message);
    }

});



