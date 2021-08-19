const mongoose = require("mongoose")

const { Schema } = mongoose

const UserSchema = new Schema({
    name: {
        type: String,
        required: "Cannot create user without name, please enter name"
    },
    email: {
        type: String,
        required: "Cannot create user without email, please enter email"
    },
    username: {
        type: String,
        required: "Cannot create user without username, please enter username"
    },
    password: {
        type: String,
        required: "Cannot create user without password, please enter password"
    },
})

const User = mongoose.model("User", UserSchema)


module.exports = { User }