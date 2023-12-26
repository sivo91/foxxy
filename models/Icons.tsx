

import { Schema, model, models } from "mongoose";

const IconsSchema = new Schema({
    heart: {
        type: Number,
    },
    like: {
        type: Number,
      
    },
    hands: {
        type: Number,
        
    },
});

const Icons = models.Icons || model("Icons", IconsSchema);

export default Icons;