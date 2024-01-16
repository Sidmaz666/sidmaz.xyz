const mongoose = require("mongoose")
require("dotenv").config()

const connection =  () => {
    const con = mongoose.connect(process.env.MONGO_URL).then(() => {
	  console.log(`Connected Established!`)
	  return con
    })
}

module.exports = connection
