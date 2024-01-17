const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = (req,res,next) => {
    mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser: true, useUnifiedTopology: true});
    mongoose.connection
    .once('open', () => { 
        console.log('Connection to the DB established');
	next()
    })
    .on('error', (err) => { 
        console.log('Error occured while connecting to the DB', err);
        res.status(401).redirect("/error")
    })
}

module.exports = connectDB;
