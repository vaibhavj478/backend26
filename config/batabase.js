import mongoose from "mongoose";

const connect = async () => {
  try {
    await mongoose.connect(`${process.env.bdUri}`);
  } catch (error) {
    console.log(error.message);
  }
};

export default connect;
