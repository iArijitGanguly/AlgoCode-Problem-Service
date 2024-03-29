const BaseError = require("./base.error");
const { StatusCodes } = require("http-status-codes");

class ServiceUnavailable extends BaseError {
  constructor() {
    super(
      "Service Unavailable",
      StatusCodes.SERVICE_UNAVAILABLE,
      "The server is currently unable to handle the request due to temporary overloading or maintenance of the server",
      {}
    );
  }
}

module.exports = ServiceUnavailable;
