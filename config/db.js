import mongoose from "mongoose";
import colors from "colors";

const connectdb= async()=>{
    try{
    const conn= await mongoose.connect(process.env.MONGO_URL)
    console.log(`connect to mongodb database ${conn.connection.host}`.bgMagenta.white)
    }
    catch(error)
    {
        console.log(`ERROR IN MONGO DB ${error}`.bgRed.white)
    }
}
export default connectdb;