const mongoose = require('mongoose');
// const ObjectId = mongoose.Schema.Types.ObjectId;

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    available: {
        type: Boolean,
        default: true
    },
    quantity: {
        type: Number,
        required: true
    },
    link: {
        type: String
    },
    isDeleated: {
        type: Boolean,
        default: false
    },

}, { timestamps: true });

module.exports = mongoose.model('Product', UserSchema);