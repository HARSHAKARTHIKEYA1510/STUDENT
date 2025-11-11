"use client"
import Link from 'next/link'
import { useState } from "react";
// import { json } from "stream/consumers";

export default function Login() {
  const [userEmail,setEmail]=useState("")
  const [pass,setpass]=useState("")
  const [message, setMessage] = useState("");


async function handleClick() {
  // e.preventDefault();
  try {
    const data = await fetch("http://localhost:4000/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: userEmail, password: pass }),
    });
    const res = await data.json();
    setMessage(res.message);
    console.log(res.message);
  } catch (err) {
    console.log(err);
  }
}


  return (
    <div className="login-container">
      <div className="left-container">
        <label>Email</label>
        <input type="text" onChange={(e)=>setEmail(e.target.value)}/>
        <label>Password</label>
        <input type="password" onChange={(e)=>setpass(e.target.value)}/>
        <button onClick={handleClick}>Login</button>
        <h1>Hi my name is harsha</h1>
        <Link href="/signup">create an account</Link>
        <h1>{message}</h1>
      </div>
    </div>
 );
}
