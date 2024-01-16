const mongoose = require('mongoose');
require("dotenv").config()

const connectToMongoDB = async () => {
  const mongoDBUri = process.env.MONGODB_URI;
  const maxRetries = 3;
  let currentRetry = 0;

  const connectWithRetry = async () => {
    try {
      await mongoose.connect(mongoDBUri, { useNewUrlParser: true, serverSelectionTimeoutMS: 30000 });
      console.log('Connected to MongoDB');
    } catch (error) {
      console.error(`Error connecting to MongoDB: ${error.message}`);

      if (currentRetry < maxRetries) {
        currentRetry++;
        const delay = 1000 * Math.pow(2, currentRetry); 
        console.log(`Retrying in ${delay / 1000} seconds...`);
        setTimeout(connectWithRetry, delay);
      } else {
        console.error('Max connection retries reached. Exiting application.');
        process.exit(1);
      }
    }
  };

  await connectWithRetry();
};


module.exports = connectToMongoDB
