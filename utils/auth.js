// route middleware to ensure user is logged in
module.exports = function (req, res, next) {
    if (req.session.user) {
        return next();
    }
    res.redirect('/');
}