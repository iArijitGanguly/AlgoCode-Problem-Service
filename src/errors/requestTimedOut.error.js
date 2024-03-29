const BaseError = require("./base.error");
const { StatusCodes } = require('http-status-codes');

class RequestTimeOut extends BaseError {
    constructor() {
        super("Request TimeOut", StatusCodes.REQUEST_TIMEOUT, "Server is timed out waiting for request", {});
    }
}

module.exports = RequestTimeOut;