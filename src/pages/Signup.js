import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase';

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate('/dashboard');
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div style={{padding:'20px', textAlign:'center'}}>
      <h2>Sign Up</h2>
      <input placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} />
      <br/>
      <input placeholder="Password" type="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
      <br/>
      <button onClick={handleSignup}>Sign Up</button>
    </div>
  );
}