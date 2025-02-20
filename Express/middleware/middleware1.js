// middleware1.js

// Define middleware function
function myMiddleware(req, res, next) {
    console.log("This is a custom middleware 1");
    next(); // pass control to the next middleware
}

// Export the middleware
module.exports = myMiddleware;