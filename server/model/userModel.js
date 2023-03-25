const mongoose=require('mongoose');
const userSchema=mongoose.Schema({
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    token:{
        type:String,
        default:null,
    },
    notes:[Object],
    time:{
        type:Date,
        default:Date.now
    }
})

const userModel=mongoose.model("Users",userSchema)

module.exports=userModel;
