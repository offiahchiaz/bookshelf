const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express' });
  res.redirect('/catalog');
});

// // Welcome Page
// router.get('/', (req, res) => {
//   res.render('welcome');
// });

// // Dashboard
// router.get('/dashboard', (res, req) => {
//   res.render('dashboard');
// });

module.exports = router;
