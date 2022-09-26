import mongoose from 'mongoose'



const blogModel = new mongoose.Schema({

    // Title - For Example : “My Journey at MasaI”,
    title:{type:String, required:[true, "title not there"], maxLength:18},

    category:{type:String, required:[true, "title not there"]} ,
    author: { type: mongoose.Schema.Types.ObjectId , ref:"User" } ,
    content:{type:String, required:[true, "title not there"]} 



});



const Blog = mongoose.model("Blog",blogModel)



export default Blog