const mongoose = require('mongoose');

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

// Export model
module.exports = mongoose.model('User', UserSchema);