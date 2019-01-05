const User = require('../models/user');

exports.index = (req, res) => {
    res.render('index', {title: 'Bookshelf Home'});
};

exports.login_get = (req, res) => {
    res.render('login', {title: 'User Login'});
};

exports.signup_get = (req, res) => {
    res.render('signup', {title: 'User Signup'});
};