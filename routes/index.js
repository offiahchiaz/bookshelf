const express = require('express');
const router = express.Router();

const {ensureAuthenticated} = require('../config/auth');

/* GET home page. */
// router.get('/', function(req, res, next) {
//   //res.render('index', { title: 'Express' });
//   res.redirect('/catalog');
// });

// Welcome Page
router.get('/', (req, res) => {
  res.render('index', {title: 'Bookshelf Home'});
});

// Dashboard
router.get('/catalog', ensureAuthenticated, (req, res) => {
  res.render('dashboard');
});

module.exports = router;
