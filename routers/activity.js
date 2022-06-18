const express=require("express")
const router=express.Router()
const activity=require("../models/activity")





router.get("/get",async (req,res)=>{
    try {
        const activities=await activity.find()
        res.json(activities)
    } catch (error) {
        res.json(error)
    }

})


router.post("/create",async (req,res)=>{
    try {
    const createdActivity=await activity.create(req.body)
    res.json(createdActivity)
    } catch (error) {
        res.json(error)
    }
    
})

module.exports=router