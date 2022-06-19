const mongoose=require("mongoose")

const activityTypeSchema=mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    rowStatus:{
        type:Number,
        require:true
    }
})
module.exports=mongoose.model("activityType",activityTypeSchema)