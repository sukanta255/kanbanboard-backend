const express = require("express")
const {connection} = require("./configs/db");
const {userRouter}=require("./routes/User.route");
require("dotenv").config();
const cors = require("cors");
const { authenticate } = require("./middlewares/authenticate.middleware");
const { boardRouter } = require("./routes/Board.route");
const { taskRouter } = require("./routes/Task.route");
const { subtaskRouter } = require("./routes/Subtask.route");

const port=process.env.port || 8080
const app = express();
app.use(cors());
app.use(express.json());

app.get("/",(req,res)=>{
    res.send("Home Page of Kanban Board");
})

app.use("/users",userRouter);
app.use("/boards",boardRouter);
app.use("/tasks",taskRouter);
app.use('/subtasks',subtaskRouter);



app.listen(port,async()=>{
    try{
        await connection
        console.log("Connected with the Database");

    }catch(err){
        console.log(err)
        console.log("Something went wrong when connection");
    }
    console.log(`Running at port Number ${port}`);
})