const { StatusCodes } = require('http-status-codes');
const CustomAPIError = require('./custom-api');

class BadRequestError extends CustomAPIError {
    constructor(message) {
        console.warn("Please provide correct credentials.")
        super(message);
        this.statusCode = StatusCodes.BAD_REQUEST;
    }
}
 
module.exports = BadRequestError;