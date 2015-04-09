var express = require('express');
var router = express.Router();
var posts = require('../controllers/posts');

/* GET users listing. */
router.get('/:id', posts.show);

router.get('/', posts.showAll);

router.post('/', posts.create);

router.put('/:id', posts.edit);

router.delete('/:id', posts.delete);

module.exports = router;
