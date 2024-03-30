const mongoose = require('mongoose');
const { NODE_ENV, ATLAS_DB_URL } = require('./server.config');

async function connectToDb() {
    try {
        if(NODE_ENV == "developement") {
            await mongoose.connect(ATLAS_DB_URL);
        }
    } catch (error) {
        console.log("Server can not connect to database");
        console.log(error);
    }
}

module.exports = connectToDb;