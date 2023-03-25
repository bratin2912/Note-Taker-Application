const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
const users = require('../model/userModel');
router.post('/register', (async (req, res) => {
    const { email, password } = req.body;
    bcrypt.hash(password, 12, async (err, hash) => {
        if (!err) {
            try {
                const user = await users.create({ email, password: hash })
                res.status(201).send({
                    message: "Register successfully"
                })
            } catch (err) {
                res.status(500).send({
                    message: "Internal server error"
                })
            }
        }
        else {
            res.status(400).send({
                message: "Error occured"
            })
        }
    })
}))

router.post('/login', (async (req, res) => {
    const { email, password } = req.body;
    try {
        const userExist = await users.findOne({ email })
        console.log(userExist.password)
        if (!userExist) {
            res.status(400).send({
                message: "User not exist nog in first"
            })
        }
        else {
            const match = await bcrypt.compare(password, userExist.password)
            if (match) {
                jwt.sign({ foo: 'bar' }, userExist.password, { algorithm: 'HS256' }, async function(err, token) {
                    if(!err){
                        const logedUser=await users.updateOne({email},{token})
                        console.log(logedUser)
                        res.status(200).send({
                            message: 'Login Successfully',
                            token
                        })
                    }
                    else{
                        res.status(404).send({
                            message:"Error occured"
                        })
                    }
                });
            }
            else {
                res.status(404).send({
                    message: "Password doesnot matched"
                })
            }
        }
    } catch (err) {
        res.status(500).send({
            message: 'Internal server error'
        })
    }
}))

module.exports = router;
