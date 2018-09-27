var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/adz', function (req, res) {
  console.log(req.body);
  res.send('thuthoi');

})
module.exports = router;
