'use client';
import Link from 'next/link';  
import { useState } from 'react';

export default function Signup(){
    const [useremail,setemail]=useState("")
    const [UserPass,setpass]=useState("")
    const [message,setmessage]=useState("")

    async function handleCreateAcc(e) {
        e.preventDefault()
        try{
        const res=await fetch("http://localhost:4000/signup",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({email:useremail,password:UserPass})
        })
        const resMsg=await res.json()
        console.log(resMsg.message)
        setmessage(resMsg.message)
    }catch(err){
        console.log(err)
    }
    }
    return (
        <div>
            <div>
                <h1>Hi</h1>
                <label>Email</label>
                <input type="email" onChange={(e)=>setemail(e.target.value)}/>
                <label>Password</label>
                <input type="password" onChange={(e)=>setpass(e.target.value)}/>
                <button onClick={handleCreateAcc}>Create Account</button>
                <h1>{message}</h1>
            </div>
        </div>
    )
}