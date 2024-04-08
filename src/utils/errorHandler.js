const BaseError = require("../errors/base.error");
const { StatusCodes } = require('http-status-codes');
const logger = require('../config/logger.config');

function errorHandler(err, req, res, next) {
    if(err instanceof BaseError) {
        logger.error(`${err.message}`);
        return res.status(err.statusCode).json({
            success: false,
            message: err.message,
            error: err.details,
            data: {} //because this is an exceptuion so no data is going to be provided
        });
    }

    logger.error(`${err.message}`);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        success: false,
        message: "Something went wrong",
        error: err,
        data: {} //because this is an exceptuion so no data is going to be provided
    });
}

module.exports = errorHandler;