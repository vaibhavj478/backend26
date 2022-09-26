import mongoose from "mongoose";

const userModel = new mongoose.Schema({
  name: { type: String },
  email: { type: String, required: [true, "fill the email"] },

  password: {
    type: String,
    required: [true, "password not there"]
  },

  blog:[
    {
      type: mongoose.Schema.Types.ObjectId,
      ref:"Blog"
    }
  ]

});

const User = mongoose.model("User", userModel);


export default User