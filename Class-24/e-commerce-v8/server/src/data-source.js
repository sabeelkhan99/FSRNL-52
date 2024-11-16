const mongoose = require('mongoose');

const dbUser = process.env.MONGO_DB_URL || 'mongodb://127.0.0.1:27017/bazaar_db';

class Database {
    static async connect() {
        try {
            await mongoose.connect(dbUser);
        }
        catch (e) {
            await mongoose.disconnect();
        }
    }
}

module.exports = Database;