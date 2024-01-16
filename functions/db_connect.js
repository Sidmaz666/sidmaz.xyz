const mongoose = require("mongoose")
require("dotenv").config()

const connection = async () => {
    const con = await mongoose.connect(process.env.MONGODB_URI,{serverSelectionTimeoutMS: 30000})
    console.log(`Connected Established!`)
    return con
}

module.exports = connection
