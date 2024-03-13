// Where 'handler' is a function that takes a request and response object and returns a promise.
module.exports = function asyncMiddleware(handler) {
    return async (req, res, next) => {
        try {
            await handler(req, res);
        } catch (error) {
            next(error);
        }
    };
}