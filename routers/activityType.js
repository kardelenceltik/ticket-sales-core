const express=require("express")
const router=express.Router()
const activityType=require("../models/activityType")

router.get("/get-by-row-status",async(req,res)=>{
    try {
        const activityTypeResponse=await activityType.find({"rowStatus":1})
        res.json(activityTypeResponse)
    } catch (err) {
        res.json(err)
    }
});
router.post("/create",async(req,res)=>{
    try {
        console.log("aa");
        const activityTypeResponse=await activityType.create(req.body)
        console.log(activityTypeResponse);

        res.json(activityTypeResponse)
    } catch (err) {
        res.json(err)
    }
})

module.exports=router