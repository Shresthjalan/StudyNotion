const mongoose = require("mongoose");

// Define the Profile schema
const categorySchema = new mongoose.Schema({
    name:{
        type:String,
        required: true,
    },
    description:{
        type:String,
    },
    course:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Course",
    }
});

// Export the Profile model
module.exports = mongoose.model("Category", categorySchema);
 