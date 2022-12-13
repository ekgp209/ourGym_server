var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.use('/user', require('./memberRouter'));
router.use('/board', require('./boardRouter'));

module.exports = router;