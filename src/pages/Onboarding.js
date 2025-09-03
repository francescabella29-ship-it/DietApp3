import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

export default function Onboarding() {
  const navigate = useNavigate();
  return (
    <div style={{textAlign:'center', padding:'40px'}}>
      <motion.h1 animate={{y:[-20,0], opacity:[0,1]}}>🌱 Welcome to DietApp</motion.h1>
      <p>Track your meals, calories, and goals in a fun way!</p>
      <motion.button whileTap={{scale:0.9}} 
        onClick={() => navigate('/login')}>
        Get Started
      </motion.button>
    </div>
  );
}