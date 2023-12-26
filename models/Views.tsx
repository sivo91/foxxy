import { Schema, model, models } from "mongoose";

const ViewsSchema = new Schema({
    count: {
        type: Number,
    },
   
});

const Views = models.Views || model("Views", ViewsSchema);

export default Views;
