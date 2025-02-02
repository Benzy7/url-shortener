require('dotenv').config();

module.exports = {
    PROTOCOL: process.env.PROTOCOL,
    HOST: process.env.HOST,
    PORT: process.env.PORT,
    MONGODB_URI: process.env.MONGODB_URI,
};
