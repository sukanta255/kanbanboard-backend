const express = require('express');
const { UserModel } = require("../models/User.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const userRouter=express.Router();

userRouter.get("/",async(req,res)=>{
    try{
        const users = await UserModel.find();
        res.send(users);

    }catch(err){
        console.log(err);
        res.send({"msg":"Problem to get the Data"});
    }
})

userRouter.post("/signup",async(req,res)=>{
    try{
        const {email,password} = req.body
        const same_user = await UserModel.find({email})
        if(same_user.length>0)
        {
            res.send({"msg":"User already exists, Please login again"});
        }
        else{
           const hashed_pass = await bcrypt.hash(password,5)
           const user= new UserModel({email,password:hashed_pass})
           await user.save();
           res.send({"msg":"User Signup successfully"});
        }

    }catch(err){
        console.log(err);
        res.send({"msg":"Something went wrong while signup"});
    }
})

userRouter.post("/signin",async(req,res)=>{
    const {email,password} = req.body
    try{
        const user = await UserModel.find({email})
        const hashed_pass = user[0].password
        if(user.length>0){
            bcrypt.compare(password,hashed_pass,(err,result)=>{
                if(result)
                {
                    const token = jwt.sign({userId: user[0]._id},"masai");
                    res.send({"msg":"Login Successful","Token":token});
                }
                else
                {
                    res.send({"msg":"Invalid Credentials"});
                }
            })
        }
        else
        {
            res.send({"msg":"Invalid Credentials"});
        }

    }catch(err){
        console.log(err);
        res.send({"msg":"Something went wrong while signin"});
    }
})


module.exports={
    userRouter
}