import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/dashboard');
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div style={{padding:'20px', textAlign:'center'}}>
      <h2>Login</h2>
      <input placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} />
      <br/>
      <input placeholder="Password" type="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
      <br/>
      <button onClick={handleLogin}>Login</button>
      <p onClick={()=>navigate('/signup')}>Don’t have an account? Sign up</p>
    </div>
  );
}