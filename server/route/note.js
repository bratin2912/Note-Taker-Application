const express=require('express');
const router=express.Router();
const users = require('../model/userModel');


router.get('/notes/:token',(async(req,res)=>{
    const token=req.params.token;
    try{
        const note=await users.findOne({token})
        console.log(note)
        res.status(200).send({
            data:note.notes,
            time:note.time
        })
    }
    catch(err){
        res.status(500).send({
            message:"Internal server error"
        })
    }
}))

router.patch('/notes',(async(req,res)=>{
    const{id}=req.body
    try{
        await notes.deleteOne({_id:id})
        res.status(200).send({
            message:'Note deleted successfully'
        })
    }
    catch(err){
        res.status.send({
            message:'Internal server error'
        })
    }
}))

router.post('/notes',(async(req,res)=>{
    const {title,description,token}=req.body;
    try{
        const note=await users.updateOne({token},{$push:{notes:{title,description}}});
        res.status(200).send({
            note
        })
    }
    catch(err){
        res.status(500).send({
            message:"Internal server error"
        })
    }
}))
module.exports=router;
