import { motion } from "motion/react";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 text-gray-200 -mt-10">

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="text-sm tracking-[0.35em] uppercase text-gray-400"
      >
        9 March · Midnight
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="mt-8 space-y-4 font-romantic"
      >
        <h1 className="text-3xl sm:text-5xl font-light text-gray-100">
          The ocean is quiet.
        </h1>
        <h2 className="text-3xl sm:text-5xl font-light text-gray-100">
          The sky is full of stars.
        </h2>
      </motion.div>

      <motion.h3
  initial={{ opacity: 0, scale: 0.9 }}
  animate={{
    opacity: 1,
    scale: 1,
    textShadow: [
      "0 0 20px rgba(255,255,255,0.4)",
      "0 0 60px rgba(255,230,200,0.9)",
      "0 0 20px rgba(255,255,255,0.4)"
    ]
  }}
  transition={{
    delay: 2.5,
    duration: 5,
    repeat: Infinity,
    repeatType: "mirror"
  }}
  className="mt-14 text-6xl sm:text-8xl font-bold bg-linear-to-r from-amber-200 via-rose-300 to-pink-300 bg-clip-text text-transparent font-romantic tracking-wide"
>
  Sakshi
</motion.h3>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 4 }}
        className="mt-6 text-xl text-amber-100 font-medium"
      >
        Happy 21st Birthday.
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 5 }}
        className="mt-8 max-w-xl text-gray-300 text-lg"
      >
        And I’m just standing here…
        thinking how lucky I am that you exist.
      </motion.p>

    </section>
  );
}