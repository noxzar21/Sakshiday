import { motion } from "motion/react";

export default function Fireworks() {
  return (
    <>
      {[...Array(20)].map((_, i) => (
        <motion.span
          key={i}
          initial={{ scale: 0, opacity: 1 }}
          whileInView={{ scale: 2, opacity: 0 }}
          transition={{
            duration: 1,
            delay: i * 0.05,
          }}
          className="absolute text-3xl"
          style={{
            top: "50%",
            left: "50%",
            transform: `rotate(${i * 18}deg) translate(100px)`,
          }}
        >
          ✨
        </motion.span>
      ))}
    </>
  );
}