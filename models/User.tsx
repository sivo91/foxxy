
import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
    name: {
        type: String,

    },
    email: {
        type: String,
        required: true  // Corrected here
    },
    password: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean
    }
});

const User = models.User || model("User", UserSchema);

export default User;
