require('dotenv').config();

module.exports = {
    protocol: process.env.PROTOCOL,
    host: process.env.HOST,
    port: process.env.PORT,
    frontUrl: process.env.FRONT_URL
};
