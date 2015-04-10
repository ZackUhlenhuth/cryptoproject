/* authored by Zack Uhlenhuth */

var express = require('express');
var router = express.Router();
var User = require('../models/user');

/* POST to login user */
router.post('/', function(req, res) {
	User.findOne({'username': req.body.username}, function(err, user) {
		console.log("hello");
		if (err) return console.log(err);
		if (user != null) {
			if (user.password == req.body.password) {
				req.session.userId = user._id;
				res.redirect('/users/' + user._id);
			}
			else {
				res.render('login', { title: 'Log In' , error : true});
			}
		} else {
			res.render('login', { title: 'Log In' , error : true});
		}
	});
});

/* POST to create user 
includes their name, password, and mobile phone number
logs them into the system */
router.post('/new', function(req, res) {
	User.findOne({'username': req.body.username}, function(err, user) {
		if (err) return console.log(err);
		if (user == null) {
			if (req.body.username != "" && req.body.password != "" && req.body.confirmpassword != ""){
				if (req.body.confirmpassword == req.body.password) {
					var data = {username: req.body.username, password: req.body.password};
					var user = new User(data);
					user.save(function (err) {
						if (err) res.send(err);
						res.redirect('/');
						req.session.userId = user._id;
					});
				}
				else {
					res.render('login');
				}
			}
			else {
				res.render('login');
			}
		}
		else {
			res.render('login');
		}
	});
});

/** GET for rendering the page */
router.get('/', function(req, res) {
	if (req.session.userId) {
		res.redirect('/users/');
	} else {
		res.render('login', { title: 'Log In'});
	}
});

module.exports = router;
