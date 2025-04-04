const mongoose =require("mongoose");

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
       type:String,
       required:true,
       unique:true

    },
    password:{ 
       type:String,
       required:true
    },
    phonenumber:{
        type:String,
        required:true
    },
    address:{
        type:String,
       required:true
    },
    role:{
        type:Number,
        default:0
    },
    location:{
         type: String, 
         
    },

    
},{timestamps:true});

module.exports=mongoose.model('User',userSchema);

