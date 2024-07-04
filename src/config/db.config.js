const mongoose = require('mongoose');
const { NODE_ENV, ATLAS_DB_URL } = require('./server.config');
const BadRequest = require('../errors/badRequest.error');

// async function connectToDb() {
//     try {
//         if(NODE_ENV == "developement") {
//             await mongoose.connect(ATLAS_DB_URL);
//         }
//     } catch (error) {
//         console.log("Server can not connect to database");
//         console.log(error);
//     }
// }

let instance;
class DBConnection {
    #isConnected;
    constructor(db_uri) {
        if(instance) {
            throw new BadRequest('Only one connection can exist', {})
        }
        this.uri = db_uri;
        instance = this;
        this.#isConnected = false;
    }

    async connect() {
        if(this.#isConnected) {
            throw new BadRequest('DB already connected', {});
        }
        if(NODE_ENV == 'developement') {
            await mongoose.connect(this.uri);
            this.#isConnected = true;
        }
    }

    async disconnect() {
        if(this.#isConnected) {
            await mongoose.disconnect();
            this.#isConnected = false;
        }
    }
}

const db = Object.freeze(new DBConnection(ATLAS_DB_URL));

module.exports = db;