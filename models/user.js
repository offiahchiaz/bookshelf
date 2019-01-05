const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String,
        minlength: 1,
        required: true
    },
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
    date: {
        type: Date,
        default: Date.now 
    }
});

// Export model
module.exports = mongoose.model('User', UserSchema);