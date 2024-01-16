const mongoose = require("mongoose")
require("dotenv").config()

const connection = async () => {
    const con = await mongoose.connect(process.env.MONGO_URL)
    console.log(`Connected Established!`)
    return con
}

module.exports = connection
