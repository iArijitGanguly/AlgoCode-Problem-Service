const BaseError = require("./base.error");
const { StatusCodes } = require('http-status-codes');

class NotFound extends BaseError {
    constructor(resourceName, resourceValue) {
        super("Resource Not Found", StatusCodes.NOT_FOUND, `The requested resource: ${resourceName} with value ${resourceValue} is not found`, {
            resourceName,
            resourceValue
        });
    }
}

module.exports = NotFound;