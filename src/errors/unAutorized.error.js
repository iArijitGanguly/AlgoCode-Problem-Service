const BaseError = require("./base.error");
const { StatusCodes } = require('http-status-codes');

class UnAuthorized extends BaseError {
    constructor() {
        super("UnAuthorized", StatusCodes.UNAUTHORIZED, "No valid credentials found", {});
    }
}

module.exports = UnAuthorized;