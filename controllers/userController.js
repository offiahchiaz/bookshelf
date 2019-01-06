const express = require('express');
const bcrypt = require('bcrypt-nodejs');
const passport = require('passport');


const User = require('../models/user');

// Home page
exports.index = (req, res) => {
    res.render('index', {title: 'Bookshelf Home'});
};

// Display login form on GET
exports.login_get = (req, res) => {
    res.render('login', {title: 'User Login'});
};

// Display signup on GET
exports.signup_get = (req, res) => {
    res.render('signup', {title: 'User Signup'});
};

// Handle user signup on POST
exports.signup_post = (req, res) => {
    const {name, email, password, password2} = req.body;
    let errors = [];

    // Check required fields
    if (!name || !email || !password || !password2) {
        errors.push({msg: 'Please fill in all fields'});
    }

    // Check passwords match
    if (password !== password2) {
        errors.push({msg: 'Passwords do not match'});
    }

    // Check password length
    if (password.length < 6) {
        errors.push({msg: 'Password should be at least 6 characters'});
    }

    if (errors.length > 0) {
        res.render('signup', { errors, name, email, password, password2 });
    } else {
        // Validation passed
        User.findOne({email: email})
            .then((user) => {
                if (user) {
                    // User exists
                    errors.push({msg: 'Email is already registered'});
                    res.render('signup', {errors, name, email, password, password2 });
                } else {
                    const newUser = new User({
                        name, 
                        email, 
                        password
                    });

                    // Hash password
                    bcrypt.genSalt(10, (err, salt) => {
                        bcrypt.hash(newUser.password, salt, null, (err, hash) => {
                            if (err) throw err;
                            // Set password to hashed
                            newUser.password = hash;
                            // Save user
                            newUser.save()
                                .then((user) => {
                                    console.log(user);
                                    req.flash('success_msg', 'you are now registered');
                                    res.redirect('/users/login');
                                })
                                .catch((e) => console.log(e));
                        });
                    });
                }
            })
    }
}