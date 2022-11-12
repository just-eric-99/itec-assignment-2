var express = require('express');
var router = express.Router();

var loki = require('lokijs');

var db = new loki('data.json', {
  autoload: true,
  autoloadCallback : databaseInitialize,
  autosave: true,
  autosaveInterval: 4000
});

function databaseInitialize() {
  var submissions = db.getCollection("submissions");
  if (submissions === null) {
    submissions = db.addCollection("submissions");
  }
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* Handle the Form */
router.post('/form', function (req, res, next) {

  db.getCollection("submissions").insert(req.body);

  let result = db.getCollection("submissions").find();

  res.json(result);
});

/* Get submission data */
router.get('/data', function (req, res, next) {

  let result = db.getCollection("submissions").find();

  res.json(result);

});

module.exports = router;
