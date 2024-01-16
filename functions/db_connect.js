const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = () => {
    mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser: true, useUnifiedTopology: true});
    mongoose.connection
    .once('open', () => { 
        console.log('Connection to the DB established');
    })
    .on('error', (err) => { 
        console.log('Error occured while connecting to the DB', err);
    })
}

module.exports = connectDB;
