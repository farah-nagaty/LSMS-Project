//Call Mongoose 
const mongoose = require("mongoose");

//Create Schema
const schoolSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true,'School name is required'],
        trim: true,
    },
    governorate: {
        type: String,
        required: [true,'Governorate is required'],
        trim: true,
    },
    adress: {
        type: String,
        required: [true,'Address is required'],
    },
    phone:{
        type: String,
        required: [true,'Phone is required'],
    },
    managerId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        default: null,
    },
    isActive:{
        type: Boolean,
        default: true,
    },

}, { timestamps: true });

schoolSchema.index({governorate:1});

// Export Module
module.exports = User;