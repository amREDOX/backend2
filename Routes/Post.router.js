const express=require("express")

const postRouter=express.Router()
const {PostModel}=require("../model/post.model")

postRouter.get("/",async(req,res)=>{
    const details=await PostModel.find()
    res.send(details)
    
})
postRouter.post("/create",async(req,res)=>{
    payload=req.body
    const detail=new PostModel(payload)
    await detail.save()
    res.send({"msg":"Created new post request"})
    
})

postRouter.delete("/delete/:id",async(req,res)=>{
    const detailID=req.params.id
    const user=await new PostModel.findByIdAndDelete({_id:detailID})
    res.send({"msg":`detail with id :${detailID} is deleted`})

})


module.exports={
    postRouter
}