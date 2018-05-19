var express = require('express');
var router = express.Router();
const mysql = require('./../mysql/mysqlUtil'); 
/* GET users listing. */
router.get('/', function(req, res, next) {
  mysql('select * from banner_carousel', function(err, data){
    if (err) return res.json(err);
    res.json(data);
  })
  
});

module.exports = router;
