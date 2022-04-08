var express = require('express');
var router = express.Router();
var multer = require('multer');
var storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function(req, file, cb) {
    var random = Math.random();
    cb(null, random +  Date.now() + file.originalname);
  },
});


var upload = multer({ storage: storage, limits: {
    fileSize: 2 * 1024 * 1024
  }
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/profile', upload.array('avatar', 5), function (req, res){
  res.render('index', {title: 'Upload thành công!!!' });
});
module.exports = router;
