var express = require('express');
var router = express.Router();
var isAuthorized = require('../utils/auth');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.get('/test', isAuthorized, function(req, res) {
  res.render('test', { title: 'Test' });
});

router.get('/main', isAuthorized, function(req, res) {
    res.render('posts', {title: 'CryptoBook', csrf: req.csrfToken()});
});

router.get('/create', isAuthorized, function(req, res) {
    res.render('create', {title: 'CryptoBook', csrf: req.csrfToken()});
})

module.exports = router;
