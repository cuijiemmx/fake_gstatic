var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/generate_204', function(req, res, next) {
	res.status(204).end()
})

module.exports = router;
