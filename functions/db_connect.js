const mongoose = require("mongoose")
require("dotenv").config()

const connection = async () => {
  try {
    const con = await mongoose.connect(process.env.MONGODB_URI)
    console.log(`Connected Established!`)
    return con
  } catch (error) {
    console.log({error})
    return {
      error,
      status: "error"
    }
  }
}

module.exports = connection
