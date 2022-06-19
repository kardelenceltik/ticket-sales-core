const express=require("express")
const router=express.Router()
const chair=require("../models/chair")

router.get("/get",async (req,res)=>{
    try {
        const chair=await chair.find()
        res.json(chair)
    } catch (error) {
        res.json(error)
    }

})

router.get("/get-by-activityId",async (req,res)=>{
    const activityId=req.query.activityId;
    const foundChair= await chair.find({"activityId":activityId})
    res.json(foundChair);
})

router.post("/create",async (req,res)=>{
    try {
        const createdChair=await chair.create(req.body)
        res.json(createdChair)
    } catch (error) {
        res.json(error)
    }
})
module.exports=router