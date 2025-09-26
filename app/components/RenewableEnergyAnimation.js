// components/RenewableEnergyAnimation.js

"use client"; // This is a client component, as it uses hooks and event listeners.

import { motion, AnimatePresence } from "framer-motion";

const RenewableEnergyAnimation = () => {
  // Animation Variants for Framer Motion
  // This helps define states for our animation: e.g., 'hidden' and 'visible'

  const sunbeamVariants = {
    hidden: { opacity: 0, pathLength: 0 },
    visible: (i) => ({
      opacity: 1,
      pathLength: 1,
      transition: {
        delay: i * 0.2 + 0.5, // Stagger the beams
        duration: 0.5,
        ease: "easeInOut",
      },
    }),
  };

  const electricityVariants = {
    hidden: { opacity: 0, pathLength: 0 },
    visible: {
      opacity: 1,
      pathLength: 1,
      transition: {
        delay: 2.5, // Start after the sunbeams hit
        duration: 0.8,
        ease: "power2.inOut",
      },
    },
  };
  
  const treeVariants = {
      sapling: { scaleY: 0, transformOrigin: 'bottom' },
      grown: { 
        scaleY: 1, 
        transformOrigin: 'bottom',
        transition: {
          delay: 3.5, // Grow after electricity is generated
          duration: 2,
          ease: "circOut"
        }
      }
  };


  return (
    <div className="relative w-full h-full overflow-hidden">
      <AnimatePresence>
        <motion.svg
          viewBox="0 0 400 200"
          className="absolute top-0 left-0 w-full h-full"
          initial="hidden"
          animate="visible"
        >
          {/* Sun ☀️ */}
          <motion.circle
            cx="50"
            cy="50"
            r="20"
            fill="#FFD700"
            initial={{ scale: 0 }}
            animate={{ scale: 1, transition: { duration: 1 } }}
          >
            {/* Pulsing glow effect */}
            <animate
              attributeName="r"
              values="20;22;20"
              dur="3s"
              repeatCount="indefinite"
            />
          </motion.circle>

          {/* Sunbeams */}
          {[0, 1, 2].map((i) => (
            <motion.line
              key={i}
              x1="50"
              y1="50"
              x2={130 + i * 10}
              y2={130 - i * 15}
              stroke="#FFD700"
              strokeWidth="2"
              custom={i}
              variants={sunbeamVariants}
            />
          ))}

          {/* Solar Panel 🔋 */}
          <motion.rect
            x="130"
            y="130"
            width="80"
            height="50"
            fill="#2C3E50"
            rx="5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 2 } }}
          />
          {/* Panel glowing effect on hit */}
          <motion.rect
            x="130"
            y="130"
            width="80"
            height="50"
            fill="#00BFFF"
            rx="5"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.7, 0], transition: { delay: 2.2, duration: 0.5 } }}
          />

          {/* Electricity Bolt ⚡️ */}
          <motion.path
            d="M 210 155 Q 240 130 270 155 T 330 155"
            stroke="#00BFFF"
            strokeWidth="2.5"
            fill="transparent"
            variants={electricityVariants}
          />
          
          {/* Tree Growth 🌱 -> 🌳 */}
          <g transform="translate(330, 180)">
              {/* Trunk */}
              <motion.rect 
                x="-5" 
                y="-50" 
                width="10" 
                height="50" 
                fill="#8B4513"
                variants={treeVariants}
                initial="sapling"
                animate="grown"
              />
              {/* Leaves */}
              <motion.circle 
                cx="0" 
                cy="-65" 
                r="25" 
                fill="#228B22"
                variants={treeVariants}
                initial="sapling"
                animate="grown"
              />
          </g>

        </motion.svg>
      </AnimatePresence>
    </div>
  );
};

export default RenewableEnergyAnimation;