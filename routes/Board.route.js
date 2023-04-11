const express = require("express");
const { BoardModel }= require("../models/Board.model");

const boardRouter=express.Router()

boardRouter.get("/",async(req,res)=>{
    try{
        const board = await BoardModel.find()
        res.send(board);
    }catch(err)
    {
        console.log(err)
    }
})

boardRouter.get("/:id",async(req,res)=>{
    try{
        const board = await BoardModel.findById(req.params.id)
        if(board==null)
        {
            return res.send({"msg":"Board not Found In Database"});
        }
        res.send(board);
    }catch(err)
    {
        console.log(err)
    }
})

boardRouter.post("/",async(req,res)=>{
    const board = new BoardModel({
        name:req.body.name,
    })
    try{
        const createBoard = await board.save();
        res.send(createBoard)
    }catch(err){
        console.log(err);
    }
})

boardRouter.patch("/:id",async(req,res)=>{
    try{
        const board = await BoardModel.findById(req.params.id)
        if(req.body.name !=null)
        {
            board.name = req.body.name
        }
        const updateBoard = await board.save()
        res.send(updateBoard);

    }catch(err)
    {
        console.log(err);
    }
})

boardRouter.delete("/:id",async(req,res)=>{
    try{
        await BoardModel.findByIdAndDelete(req.params.id)
        res.send({"msg":"Board Deleted Successfully"});
    }catch(err)
    {
        console.log(err);
    }
})

module.exports={
    boardRouter
}