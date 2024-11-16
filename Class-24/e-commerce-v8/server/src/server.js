if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}
const app = require('./app');
const Database = require('./data-source');
const Logger = require('./core/Logger');

const port = process.env.PORT || 8080;

(async () => {
    try {
        await Database.connect();
        Logger.info("DB Connection Open!");
        app.listen(port, () => {
            Logger.info(`Server started at port ${port}`);
        });
    }
    catch (err) {
        Logger.info(err);
    }
})();