const mongoose = require('mongoose');
// const ObjectId = mongoose.Schema.Types.ObjectId;

const UserSchema = new mongoose.Schema({
     name: {
        type: String,
        required: true
    },
    location: {
        type: String
     }, 
     email: {
        type: String,
        required: true,
        unique: true
     }, 
   //   mobile: {
   //      type: Number,
   //      required: true,
   //      unique: true
   //   },
     password: {
        type: String,
        required: true
     },
     date:{
        type:Date,
        default:Date.now
     }
}, { timestamps: true });

module.exports = mongoose.model('User', UserSchema);