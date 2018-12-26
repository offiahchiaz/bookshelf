const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    email: {
        type: String,
        trim: true,
        required: true,
        unique: true,
        minlength: 1,
        lowercase: true

    },
    password: {
        type: String,
        trim: true,
        required: true,
        minlength: 6
    },
    address: {
        type: String,
        trim: true
    }
});

// Hash the password before saving it to the database
UserSchema.pre('save', function (next) {
    const user = this;
    if (!usser.isModified('password')) { return next();}
    bcrypt.genSalt(10, function(err, salt) {
        if (err) { return next(err);}
        bcrypt.hash(user.password, salt, null, function (err, hash) {
            if (err) { return next(err);}
            user.password = hash;
            next();
        });
    });
});

// Compare password in the database and the one typed by the user
UserSchema.methods.comparePassword = function (password) {
    return bcrypt.compareSync(password, this.password);
}; 

// Export model
module.exports = mongoose.model('User', UserSchema);