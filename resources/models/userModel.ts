import mongoose from "mongoose";

export interface User {
    userName: string;
    email: String;
    password: String;
    isVerified?: Boolean;
    isAdmin?: Boolean;
    lat: Number;
    lng: Number;
}

const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: [true, "Please provide username"],
        unique: true,
        trim: true
    },
    email: {
        type: String,
        required: [true, "Please provide email"],
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: [true, "Please provide password"],
        trim: true
    },
    isVerified: {
        default: false,
        type: Boolean
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    lat: {
        type: Number,
        required: [true, "Please provide password"]
    },
    lng: {
        type: Number,
        required: [true, "Please provide password"]
    }
});

export default mongoose.models.user || mongoose.model("user", userSchema);
