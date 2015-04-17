var express = require('express');
var router = express.Router();
var posts = require('../controllers/posts');
var isAuthorized = require('../utils/auth');

/* GET users listing. */
router.get('/:id', isAuthorized, posts.show);

router.get('/', isAuthorized, posts.showAll);

router.post('/', isAuthorized, posts.create);

router.put('/:id', isAuthorized, posts.edit);

router.delete('/:id', isAuthorized, posts.delete);

module.exports = router;
