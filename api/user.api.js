import User from "../model/user.model.js";

import bcrypt from "bcryptjs";

import jwt from "jsonwebtoken";

export const signup = async (req, res) => {
  try {
    let { name, email, password } = req.body;

    const data = await User.findOne({ email });

    if (data) {
      return res.status(400).send({
        success: false,
        message: "email already in use",
      });
    }

    const user = req.body;

    user.password = await bcrypt.hash(user.password, 6);

    await User.create(user);

    res.status(201).send({
      success: true,
      message: "user created",
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: error.message,
    });
  }
};
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    let user = await User.findOne({ email });

    if (!user) {
      return res.status(400).send({
        success: false,
        message: "signup first",
      });
    }

    let check = await bcrypt.compare(password, user.password);


    if (!check) {
      return res.status(400).send({
        success: false,
        message: "invalid credential",
      });
    }


    let token = await jwt.sign({ id: user._id }, 'shhhhh');


        res.status(200).send({

            success:true,
           user,
           token
        })


  } catch (error) {
    res.status(500).send({
      success: false,
      message: error.message,
    });
  }
};
export const logout = async (req, res) => {
  try {


  } catch (error) {
    res.status(500).send({
      success: false,
      message: error.message,
    });
  }
};
