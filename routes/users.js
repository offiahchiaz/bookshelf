const express = require('express');
const router = express.Router();

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

// router.get('/cool', function(req, res, next) {
//   res.send('You\'re so cool');
// });

const user_controller = require('../controllers/userController');

// ================== USER ROUTES ================== 

// GET catalog home page
router.get('/', user_controller.index);

// GET request for user login
router.get('/login', user_controller.login_get);

// GET request for user signup
router.get('/signup', user_controller.signup_get);

// POST request for user signup
router.post('/signup', user_controller.signup_post);

module.exports = router;
