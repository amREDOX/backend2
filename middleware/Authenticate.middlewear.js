
const jwt = require('jsonwebtoken')

const authentication=(req,res,next)=>{
    const token_id=req.headers.authorization
if(token_id){
    jwt.verify(token_id,"facebook",(err,decoded)=>{
        if(decoded){
            req.body.user=decoded.userId
            next()
        }
        else{
            res.send({"msg":"Please login first"})
        }
    })

}
else{
    res.send({"msg":"Please login first"})
}

}

module.exports={
    authentication
}