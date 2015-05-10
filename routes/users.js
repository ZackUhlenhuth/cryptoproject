var express = require('express');
var router = express.Router();
var users = require('../controllers/users');
var isAuthorized = require('../utils/auth');

/* GET users listing. */
router.get('/', function(req, res) {
  res.send('hello user ' + req.session.userID);
});


router.get('/publicKeys', isAuthorized, users.showAllPublickKeys);

router.get('/:id', isAuthorized, function(req, res) {
  res.render('test');
});



module.exports = router;