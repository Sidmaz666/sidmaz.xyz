const mongoose = require("mongoose")
require("dotenv").config()

const connection = () => {
    mongoose.connect(process.env.MONGODB_URI).then(() => {
      console.log(`Connected Established!`)
      return con
    })
}

module.exports = connection
