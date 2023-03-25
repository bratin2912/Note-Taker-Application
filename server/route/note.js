const express=require('express');
const router=express.Router();
const notes=require('../model/noteModel')

router.get('/notes',(async(req,res)=>{
    try{
        const note=await notes.find();
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

module.exports=router;