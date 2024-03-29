const BaseError = require("./base.error");
const { StatusCodes } = require('http-status-codes');

class ForBidden extends BaseError {
    constructor(methodName) {
        super("Request Forbidden", StatusCodes.FORBIDDEN, `method ${methodName} is un authorized refused to get request`, {});
    }
}

module.exports = ForBidden;