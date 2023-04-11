const mongoose = require("mongoose");

const subtaskSchema=mongoose.Schema({
    title:{type:String,required:true},
    isCompleted:{type:Boolean,required:true},
    upperID:{type:String, required:true}
})

const SubtaskModel = mongoose.model("subtask",subtaskSchema)
module.exports={
    SubtaskModel
}





// {
//     _id: ObjectId,
//        title : String,
//        isCompleted : boolean
//    }
   





