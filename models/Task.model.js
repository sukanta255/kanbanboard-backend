const mongoose = require("mongoose");

const taskSchema=mongoose.Schema({
    title: {type:String,required:true},
    description: {type:String,required:true},
    status: {type: String, enum: ['Todo', 'Doing', 'Done'], default: 'Todo'},
    subtask : [{ type: mongoose.Schema.Types.ObjectId, ref: 'subtask'}],
    upperID : {type:String,required:true}
})

const  TaskModel = mongoose.model("task", taskSchema)
module.exports={
     TaskModel
}





// {
//     _id: ObjectId,
//        title : String,
//        description : String,
//        status : {type: String, enum: ['Todo', 'Doing', 'Done'], default: 'Todo'},
//        subtask : [{ type: ObjectId, ref: 'Subtask'}]
//    }
   





