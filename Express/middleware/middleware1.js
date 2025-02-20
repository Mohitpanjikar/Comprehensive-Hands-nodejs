app.use(function(req, res, next) {
    console.log("This is a custom middleware 1");
    next(); // pass control to the next middleware
});

module.exports = myMiddleware