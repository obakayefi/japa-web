import { Schema, models, model } from "mongoose";

const MaillistSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    firstName: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
}, { timestamps: true });

export default models.Maillist || model("Maillist", MaillistSchema);