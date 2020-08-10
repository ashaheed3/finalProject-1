const mongoose = require('mongoose');
const config = require('config');
const db = config.get('MONGODB_URI');

const connectDB = () => {
  mongoose.connect(process.env.MONGODB_URI || db, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
  });

  console.log('MongoDB Connected!!');
};

module.exports = connectDB;
