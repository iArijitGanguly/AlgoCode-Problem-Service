const BaseError = require("./base.error");
const { StatusCodes } = require('http-status-codes');

class NotFound extends BaseError {
    constructor(resource) {
        super("Resource Not Found", StatusCodes.NOT_FOUND, `Not Fount - ${resource}`, {});
    }
}

module.exports = NotFound;