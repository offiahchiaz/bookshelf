const User = require('../models/user');

exports.index = (req, res) => {
    res.render('index', {title: 'Bookshelf Home'});
};