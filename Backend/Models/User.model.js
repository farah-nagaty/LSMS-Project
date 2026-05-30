//Call Mongoose & Bcrypt
const mongoose = require("mongoose");
const bcrypt = require ("bcryptjs");

//Create Schema
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true,'Username is required'],
        trim: true,
    },
    email: {
        type: String,
        required: [true,'Email is required'],
        unique: true,
        lowercase: true,
        trim: true,
    },
    password: {
        type: String,
        required: [true,'Password is required'],
        minlength: 8,
        select: false,
    },
    role:{
        type: String,
        enum: ['superadmin','manager'],
        required: [true,'Role is required'],
    },
    schoolId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'School',
        default: null,
    },
    isActive:{
        type: Boolean,
        default: true,
    },

}, { timestamps: true });

userSchema.index({email:1}, {unique:true});

//Hooks
userSchema.pre("save", async function (next){
    if (!this.isModified("password")) return next();
    this.password = await bcrypt.hash(this.password,12);
    next();
})
userSchema.methods.comparePassword = async function (matchedPassword){
    return await bcrypt.compare(matchedPassword, this.password)
}
// Create Model
const User = mongoose.model("User", userSchema);
// Export Module
module.exports = User;