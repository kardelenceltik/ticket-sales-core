const express=require("express")

const app=express()
const mongoose=require("mongoose")
require("dotenv/config")
app.get("/furkan",(req,res)=>{
    res.send({name:"furkan",surname:"altıntaş",age:26})
})


mongoose.connect(
    process.env.DB_CONNECT,
     {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log("connected db");
  }
)

app.listen(7070)