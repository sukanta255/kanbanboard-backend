const express = require("express");
const { SubtaskModel } = require("../models/Subtask.model");

const subtaskRouter= express.Router();

subtaskRouter.get("/",async(req,res)=>{
    try{
        const task = await SubtaskModel.find()
        res.send(task);
    }catch(err)
    {
        console.log(err)
    }
})

subtaskRouter.get("/:id",async(req,res)=>{
    try{
        const subtask = await SubtaskModel.find({ upperID: req.params.id })
        res.send(subtask);
    }catch(err)
    {
        console.log(err)
    }
})

subtaskRouter.post("/",async(req,res)=>{
    const subtask = new SubtaskModel({
        title:req.body.title,
        isCompleted: req.body.isCompleted,
        upperID: req.body.upperID
    })
    try{
        const createsubtask = await subtask.save();
        res.send(createsubtask)
    }catch(err){
        console.log(err);
    }
})

subtaskRouter.patch("/:id",async(req,res)=>{
    try{
        await SubtaskModel.findByIdAndUpdate(req.params.id, req.body);
        res.send({"msg":"Subtask Updated successfully"});

    }catch(err)
    {
        console.log(err);
    }
})

subtaskRouter.delete("/:id",async(req,res)=>{
    try{
        await SubtaskModel.findByIdAndDelete(req.params.id)
        res.send({"msg":"Subtask Deleted Successfully"});
    }catch(err)
    {
        console.log(err);
    }
})

module.exports={
    subtaskRouter
}