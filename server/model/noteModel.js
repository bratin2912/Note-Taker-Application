const mongoose=require('mongoose');

const noteSchema=mongoose.Schema({
    createdBy:{
        type:String,
        require:true
    },
    title:{
        type:String,
        require:true
    },
    description:{
        type:String,
        require:true
    }
})

const noteModel=mongoose.model("Notes",noteSchema)

module.exports=noteModel;