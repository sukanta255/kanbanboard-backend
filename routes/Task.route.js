const express = require("express");
const { TaskModel } = require("../models/Task.model");

const taskRouter= express.Router();

taskRouter.get("/",async(req,res)=>{
    try{
        const task = await TaskModel.find()
        res.send(task);
    }catch(err)
    {
        console.log(err)
    }
})

taskRouter.get("/:id",async(req,res)=>{
    try{
        const task = await TaskModel.find({ upperID: req.params.id })
        res.send(task);
    }catch(err)
    {
        console.log(err)
    }
})

taskRouter.post("/",async(req,res)=>{
    const task = new TaskModel({
        title:req.body.title,
        description: req.body.description,
        status: req.body.status,
        upperID: req.body.upperID
    })
    try{
        const createTask = await task.save();
        res.send(createTask)
    }catch(err){
        console.log(err);
    }
})

taskRouter.patch("/:id",async(req,res)=>{
    try{
        await TaskModel.findByIdAndUpdate(req.params.id, req.body);
        res.send({"msg":"Task Updated successfully"});

    }catch(err)
    {
        console.log(err);
    }
})

taskRouter.delete("/:id",async(req,res)=>{
    try{
        await TaskModel.findByIdAndDelete(req.params.id)
        res.send({"msg":"Task Deleted Successfully"});
    }catch(err)
    {
        console.log(err);
    }
})

module.exports={
    taskRouter
}