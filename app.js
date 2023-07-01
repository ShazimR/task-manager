require('dotenv').config();
require('./db/connect');

const express = require('express');
const app = express();
const tasks = require('./routes/tasks');
const connectDB = require('./db/connect');


// middleware
app.use(express.json());
app.use(express.static('./public'));


// routes
app.use('/api/v1/tasks', tasks);


const start = async () => {
    try {
        await connectDB();
        app.listen(process.env.PORT, process.env.HOST, () => {
            console.log(`App is listening at: http://${process.env.HOST}:${process.env.PORT}`);
        });
    } catch (error) {
        console.log(error);
    }
};

start();
