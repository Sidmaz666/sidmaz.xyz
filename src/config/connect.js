import mongoose from "mongoose";

const DATABASE_URL = process.env.MONGODB_URI;

if (!DATABASE_URL) {
  throw new Error("Please define the DATABASE_URL environment variable inside .env.local");
}

async function connect() {
  if(!mongoose.connections[0].readyState){
    await mongoose.connect(DATABASE_URL).then((mongoose) => {
        console.log("Connected To Database!")
	return mongoose;
    });
  }
  return mongoose.connections[0]
}

export default connect;
