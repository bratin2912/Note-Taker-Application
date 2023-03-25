import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import './Auth.css'
const Login = () => {
    const[formData,setFormData]=useState({email:"",password:""})
    const navigate=useNavigate();
    const handleLogin=(e)=>{
        e.preventDefault();
        if(formData.email==="" || formData.password===""){
            alert('Fill all the field first')
        }
        else{
            axios.post("http://localhost:5000/login",formData)
            .then(()=>{
                alert("Login Successfully")
                navigate('/Home')
            })
            .catch(err=>{
                alert("Somthing went wrong")
            })
        }
    }
    return (
        <div className='login-container'>
            <form>
                <h1>Sign In</h1>
                <div className='form-div'>
                    <label htmlFor="email">
                        <h4>Email address</h4>
                        <input type="text" id='email' onChange={(e)=>setFormData({...formData,email:e.target.value})}/>
                    </label>
                    <label htmlFor="password">
                        <h4>Password</h4>
                        <input type="text" id='password' onChange={(e)=>setFormData({...formData,password:e.target.value})}/>
                    </label>
                </div>
                <button className='login-btn' onClick={handleLogin}>Submit</button>
            </form>
        </div>
    )
}

export default Login