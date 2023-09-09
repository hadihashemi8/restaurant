import mongoose from "mongoose";


const newSchema = new mongoose.Schema({
    fullName: { type: String, required: true },
    phoneNumber: { type: Number, required: true },
    password: { type: String, required: true },
    comments: { type: Array, required: false },
    isAdmin: { type: mongoose.Schema.Types.Mixed , required: true, default: false },
}, { timestamps: true })


const User = mongoose.models.User || mongoose.model("User", newSchema)

export default User