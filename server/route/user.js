const express=require('express');
const router=express.Router();
const bcrypt=require('bcrypt');
const users=require('../model/userModel')
router.post('/register',(async(req,res)=>{
    const{email,password}=req.body;
    bcrypt.hash(password,12,async(err,hash)=>{
        if(!err){
            try{
                const user=await users.create({email,password:hash})
                res.status(201).send({
                    message:"Register successfully"
                }) 
            }catch(err){
                res.status(500).send({
                    message:"Internal server error"
                })
            }
        }
        else{
            res.status(400).send({
                message:"Error occured"
            })
        }
    })
}))

router.post('/login',(async(req,res)=>{
    const{email,password}=req.body;
    try{
        const userExist=await users.find({email})
        if(!userExist){
            res.status(400).send({
                message:"user not exist nog in first"
            })
        }
        else{
            bcrypt.compare(password,userExist.password,async(result)=>{
                if(result){
                    res.status(200).send({
                        message:'Login Successfully'
                    })
                }
                else{
                    res.status(404).send({
                        message:"Password doesnot matched"
                    })
                }
            })
        }
    }catch(err){
        res.status(500).send({
            message:'Internal server error'
        })
    }
}))

module.exports=router;