import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
const Register = () => {
    const [formData, setFormData] = useState({ email: "", password: "",confirmPassword:""});
    const navigate=useNavigate();
    const handleRegister=(e)=>{
        e.preventDefault();
        if(formData.password!==formData.confirmPassword){
            alert("Password and Confirm Password are not matched")
        }
        else{
            axios.post("http://localhost:5000/register",formData)
            .then(()=>{
                alert("Register Successfully");
                navigate('/')
            })
            .catch(err=>{
                console.log(err)
                alert('Somthing went wrong')
            })
        }
    }

    return (
        <div className='login-container'>
            <form>
                <h1>Register</h1>
                <div className='form-div'>
                    <label htmlFor="email">
                        <h4>Email address</h4>
                        <input type="text" id='email' onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                    </label>
                    <label htmlFor="password">
                        <h4>Password</h4>
                        <input type="text" id='password' onChange={(e) => setFormData({ ...formData, password: e.target.value })} />
                    </label>
                    <label htmlFor="confirmPassword">
                        <h4>Confirm Password</h4>
                        <input type="text" id='confirmPassword' onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })} />
                    </label>
                </div>
                <button className='login-btn' onClick={handleRegister}>Register</button>
            </form>
        </div>
    )
}

export default Register