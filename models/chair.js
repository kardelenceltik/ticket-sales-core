const mongoose=require("mongoose")
const chairSchema=mongoose.Schema({
    id:{
        type:String,
        require:true
    },
    activityId:{
        type:String,
        require:true
    },
    categories:[{
        name:String,
        price:Number,
        stock:Number
    }]
})
module.exports=mongoose.model("chair",chairSchema)