const jwt = require("jsonwebtoken");
require("dotenv").config();

const authenticate = (req,res,next)=>{
    const token = req.headers.authorization
    if(token)
    {
        const decoded = jwt.verify(token,process.env.key)
        if(decoded)
        {
            const userID=decoded.userID
            console.log(decoded);
            req.body.userId = userID
            next();
        } 
        else{
            res.send({"msg":"User already Exists, Please Login again"});
        }
    }
    else{
        res.send({"msg":"User already Exists, Please Login again"});
    }
}

module.exports={
    authenticate
}