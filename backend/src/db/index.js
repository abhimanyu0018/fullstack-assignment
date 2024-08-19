
import mongoose from "mongoose"

const DB_NAME = "test"
const url = "mongodb+srv://test:atlasfortest@cluster0.gvtvr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

const connectDB = async () => {
    try {
        const connection = await mongoose.connect(`${url}/${DB_NAME}`)
        console.log(`\n mongoDB Connected || DB Host: ${connection.connection.host}`);
    } catch (error) {
        console.error("MongoDB connection error: ",error)
        process.exit(1)
    }
}


export default connectDB;