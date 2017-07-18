var express = require('express');
var router = express.Router();


// The admin user
const userId = 1;


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index',
      {
          title: 'Express',
          userId  : userId
      }
  );
});

module.exports = router;
