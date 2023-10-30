import mongoose from "mongoose";

export interface User {
    userName: string;
    email: String;
    password: String;
    isVerified?: Boolean;
    isAdmin?: Boolean;
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
    }
});

export default mongoose.models.users || mongoose.model("users", userSchema);
