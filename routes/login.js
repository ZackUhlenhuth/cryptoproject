var isAuthorized = require('../utils/auth');

module.exports = function(app, passport) {

// normal routes ===============================================================

    // LOGOUT ==============================
    app.get('/logout', function(req, res) {
        req.logout();
        res.redirect('/');
    });

// =============================================================================
// AUTHENTICATE (FIRST LOGIN) ==================================================
// =============================================================================

        // LOGIN ===============================
        app.get('/login', function(req, res) {
            res.render('login', { title: 'Log In', csrf: req.csrfToken()});
            // res.render('login', { title: 'Log In'});
        });

        // process the login form
        app.post('/login', passport.authenticate('local-login', {
            successRedirect : '/main', // redirect to the secure profile section
            failureRedirect : '/', // redirect back to the signup page if there is an error
            failureFlash : true // allow flash messages
        }));

        // process the signup form
        app.post('/signup', passport.authenticate('local-signup', {
            successRedirect : '/main', // redirect to the secure profile section
            failureRedirect : '/', // redirect back to the signup page if there is an error
            failureFlash : true // allow flash messages
        }));

};