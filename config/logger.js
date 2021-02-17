// copied from week 11 - MAD9124
// Setting up the winston logger

// based on demo from :https://github.com/winstonjs/winston/blob/master/examples/custom-levels.js
const customLoggerLevels = {
    levels: {
        error: 0,
        warn: 1,
        database: 2,
        info: 3,
    }
}

const winston = require('winston')
const logger = winston.createLogger({
    levels: customLoggerLevels.levels,
    format: winston.format.json(),
    defaultMeta: { service: 'user-service' },
    transports: [
        //
        // - Write to all logs with level `info` and below to `combined.log`
        // - Write all logs error (and below) to `error.log`.
        //
        new winston.transports.File({ filename: 'logs/error.log', level: 'error' }),
        new winston.transports.File({ filename: 'logs/combined.log' })
    ]
})

//
// If we're not in production then log to the `console` with the format:
// `${info.level}: ${info.message} JSON.stringify({ ...rest }) `
//
if (process.env.NODE_ENV !== 'production') {
    logger.add(
        new winston.transports.Console({
            format: winston.format.simple()
        })
    )
}

module.exports = logger