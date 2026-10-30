// title:string 
// destination:string
// description:string
// price:number
// durationDays:number
// availableSeats:number
// availableDates: date
// image: array of strings 

const mongoose=require("mongoose");
const tourSchema=new mongoose.Schema({
    title:{
    type :String,
    required:[true,"title is required"]

    },
    destination:{
        type:String,
        required:[true,"destination is required"]
    },
    description:{
        type:String,
        required:[true,"description is required"]
    },
    price:{
        type:Number,
        required:[true,"price is required"]

    },
    durationDays:{
        type:Number,
        required:[true,"durationDays is required"]
    },
    availableSeats:{
        type:Number,
        required:[true,"availableSeats is required"]
    },
    availableDates:{
        type:Date,
        required:[true,"availableDates is required"]
    },
    image:{
        type:[String],
        required:[true,"image is required"]
    },
    rating:{
        type:Number,
        default:0,
        min:[0,"rating must be greater than or equal to 0"],
        max:[5,"rating must be less than or equal to 5"]
    },
    isActive:{
        type:Boolean,
        default:true,
    }
    
})
module.exports=mongoose.model("Tour",tourSchema);

