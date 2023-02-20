
const express=require("express")
const {connection}=require("./db")
const {userRouter}=require("./Routes/User.router")
const {postRouter} =require("./Routes/Post.router")
const {authentication}=require("./middleware/Authenticate.middlewear")
const cors=require("cors")
require("dotenv").config()
const app=express()

app.use(express.json())
app.use(cors({
    origin:"*"
}))


app.get("/",(req,res)=>{
    res.send("Main Page")
})

app.use("/users",userRouter)
app.use(authentication)
app.use("/posts",postRouter)



app.listen(process.env.port,async()=>{
    try{
        await connection
        console.log("Connected to db base")
    }

    catch(err){
        console.log("Error")
    }

    console.log("Server is running at 4500")
})