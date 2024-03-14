const winston = require('winston');
require('winston-mongodb');

module.exports = function (app) {
    const logger = winston.createLogger({
        level: 'debug',
        format: winston.format.json(),
        transports: [
            new winston.transports.File({ filename: 'logfile.log' }),
            new winston.transports.Console({ colorize: true, prettyPrint: true })
        ]
    });
};