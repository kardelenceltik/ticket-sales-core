const express=require("express")
const app=express()
const mongoose=require("mongoose")
app.get("/furkan",(req,res)=>{
    res.send({name:"furkan",surname:"altıntaş",age:26})
})


mongoose.connect(
    "mongodb://localhost:27017/ticket-management",
     {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log("connected db");
  }
)

app.listen(7070)