import mongoose, {Schema,model, models, mongo} from "mongoose";

const demoSchema = new Schema({
    name:String,
    date:Date
})

const Demo = mongoose.models.Note || mongoose.model("Note",demoSchema);

export default Demo;