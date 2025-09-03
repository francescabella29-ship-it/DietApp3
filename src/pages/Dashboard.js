import React from 'react';
import { motion } from 'framer-motion';

export default function Dashboard() {
  return (
    <div style={{padding:'20px'}}>
      <motion.h2 animate={{scale:[0.9,1.1,1]}}>🏆 Dashboard</motion.h2>
      <p>Track your calories, meals, and progress here.</p>
    </div>
  );
}