var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index');
});

// router.get('/login-form', function(req, res, next) {
//     res.render('login-form');
// });

router.get('/registration-form', function(req, res, next) {
    res.render('register-form');
});

router.post('/user-registration', function (req, res) {
    res.render('success-form-validation');
});

module.exports = router;
