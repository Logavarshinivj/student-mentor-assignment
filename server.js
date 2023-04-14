const express=require("express")
const cors=require("cors")
const morgan=require("morgan")
const colors=require("colors")
const dotenv=require("dotenv")
const app=express()
const path=require("path")
const connectDb=require("./config/connectDb")
app.use(express.json())
dotenv.config()

//middlewares
app.use(
    cors({
      origin: 'http://localhost:4000'      
    })
  );
app.use(morgan("dev"))


app.use("/",require("./Routes/studentRoute"))



connectDb()



const PORT= process.env.PORT || 4000

app.listen(PORT,()=>{
    console.log(`Server started running on port ${PORT}🔥🔥`)
})