import { motion } from "motion/react";
import { useState, useEffect } from "react";

export default function BackgroundEffects() {
  const [showShootingStar, setShowShootingStar] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowShootingStar(true);
    }, 5500); // timed with her name appearance

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">

      {/* Cinematic slow zoom */}
      <motion.img
        src="/bg.jpg"
        alt="moonlit ocean"
        initial={{ scale: 1 }}
        animate={{ scale: 1.05 }}
        transition={{
          duration: 45,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear"
        }}
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* Depth overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-black/30 via-black/50 to-black/70" />

      {/* Moon glow enhancement */}
      <div className="absolute top-[18%] left-1/2 -translate-x-1/2 w-64 h-64 bg-white/20 rounded-full blur-3xl opacity-40 pointer-events-none" />

      {/* Subtle star field */}
      {[...Array(40)].map((_, i) => (
        <motion.div
          key={i}
          animate={{ opacity: [0.2, 0.8, 0.2] }}
          transition={{
            duration: Math.random() * 5 + 3,
            repeat: Infinity,
          }}
          className="absolute bg-white rounded-full"
          style={{
            width: "2px",
            height: "2px",
            top: `${Math.random() * 65}%`,
            left: `${Math.random() * 100}%`,
          }}
        />
      ))}

      {/* Water shimmer animation */}
      <motion.div
        animate={{ opacity: [0.2, 0.35, 0.2] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute bottom-0 left-0 right-0 h-1/3 bg-linear-to-t from-white/10 to-transparent pointer-events-none"
      />

      {/* Shooting Star (appears once) */}
      {/* Shooting Star */}
{showShootingStar && (
  <motion.div
    initial={{ x: -300, y: 150, opacity: 0 }}
    animate={{ x: 1400, y: -400, opacity: [0, 1, 0] }}
    transition={{ duration: 2, ease: "easeOut" }}
    className="absolute pointer-events-none"
  >
    <div className="w-48 h-0.5 bg-linear-to-r from-white via-white/80 to-transparent blur-[1px] shadow-[0_0_15px_white]" />
  </motion.div>
)}
    </div>
  );
}