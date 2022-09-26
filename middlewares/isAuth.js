

import jwt from 'jsonwebtoken'

import User from '../model/user.model.js'

const isAuth = async(req,res,next)=>{


    try {

        // console.log(req.headers?.authorization)

        let token = req.headers?.authorization

        let decode = jwt.decode(token, 'shhhhh');

        

        if(decode.id){

            
            req.user = await User.findById(decode.id)

            next()
        }else{
            res.status(400).send({
                success: false,
                message: "login first",
            })
        }
        
    } catch (error) {
        res.status(500).send({
            success: false,
            message: error.message,
          });
    }
}



export default isAuth