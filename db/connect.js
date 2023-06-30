require('dotenv').config();
const mongoose = require('mongoose');

const connectDB = (url) => {
    console.log('CONNECTED TO DB...')
    return mongoose.connect(process.env.MONGO_URI);
};

module.exports = connectDB;
