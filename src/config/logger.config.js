const winston = require('winston');
require('winston-mongodb');

const { LOG_DB_URL } = require('./server.config');

const allowedTransports = [];

//The below transport configuration enables logging in console window 
allowedTransports.push(new winston.transports.Console({
    format: winston.format.combine(
        winston.format.errors({stack: true}),
        winston.format.colorize(),
        winston.format.timestamp({
            format: 'YYYY-MM-DD HH:MM:SS'
        }),
        winston.format.printf((log) => `${log.timestamp} [${log.level}]: ${log.message} - ${log.stack || "No stack trace"}`)
    )
}));

//The below transport configuration enables logging in mongodb server
allowedTransports.push(new winston.transports.MongoDB({
    level: 'error',
    db: LOG_DB_URL,
    collection: 'logs'
}));

//The below transport configuration enables logging in file
allowedTransports.push(new winston.transports.File({
    filename: 'app.log'
}));

const logger = winston.createLogger({
    format: winston.format.combine(
        winston.format.errors({stack: true}),
        //First argument to the combine method is defining how we want the timestamp to come up
        winston.format.timestamp({
            format: 'YYYY-MM-DD HH:MM:SS'
        }),
        //Second argument to the combine method, which defines what is exactly going to be printed in the log 
        winston.format.printf((log) => `${log.timestamp} [${log.level.toUpperCase()}]: ${log.message}: ${log.stack}`)
    ),

    transports: allowedTransports
});

module.exports = logger;