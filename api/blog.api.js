import Blog from "../model/blog.model.js";
import User from "../model/user.model.js";

 export const createBlog = async (req, res) => {
  try {
    const { title, category, content } = req.body;

    // console.log(req.user.id)

    const author = req.user.id

     console.log(author);

    if (title && author && category && content) {
      const blog = await Blog.create({title, category,content,author});

      const  user =  await User.findById(req.user._id)

      user.blog.push(blog._id);

      await user.save();

      res.status(201).send({

        success:true,
        blog
      })


    } else {
      res.status(400).send({
        success: false,
        message: "blog created",
      });
    }
  } catch (error) {
    res.status(500).send({
      success: false,
      message: error.message,
    });
  }
};
 export const getBlog = async (req, res) => {
  try {
        const blog =  await Blog.find();
        res.status(200).send({
            success:true,
            blog
        })
  } catch (error) {
    res.status(500).send({
      success: false,
      message: error.message,
    });
  }
};
 export const myBlog = async (req, res) => {
  try {
        const blog =  await Blog.find({author:req.user._id});
        res.status(200).send({
            success:true,
            blog
        })
  } catch (error) {
    res.status(500).send({
      success: false,
      message: error.message,
    });
  }
};


export const deleteBlog = async (req, res) => {
    try {

        const id = req.query


            const user = await  User.findById(req.user._id);

            const blog = user.blog.filter((el)=>{

                return el !== id 
            })

            user.blog = blog;

            await Blog.findByIdAndDelete({id})

            res.status(200).send({
                success:true,
                message:"blog delete"
            })
            

         
          res.status(200).send({
              success:true,
              blog
          })
    } catch (error) {
      res.status(500).send({
        success: false,
        message: error.message,
      });
    }
  };



