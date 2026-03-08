import { motion } from "motion/react";

export default function GoddessSection() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 text-gray-200">

      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-4xl sm:text-6xl font-romantic font-light mb-14 text-white"
      >
        There’s something about you.
      </motion.h2>

      <div className="max-w-2xl space-y-6 text-xl sm:text-2xl leading-relaxed font-romantic">

        <p>
          It's not just your smile.
        </p>

        <p>
          Not just the way you get dramatic and then laugh five minutes later.
        </p>

        <p>
          Not even the way you care for people more than they deserve.
        </p>

        <p className="mt-8">
          It's the way you make my world feel softer.
        </p>

        <p>
          Calmer.
        </p>

        <p>
          Brighter — without even trying.
        </p>

        <p className="mt-10 text-white font-semibold">
          You don't enter a room.
        </p>

        <p>
          You change the atmosphere.
        </p>

        <p className="mt-8">
          And when I look at you…
        </p>

        <p>
          I don't see someone I have to impress.
        </p>

        <p>
          I see someone I want to protect.
        </p>

        <p>
          Someone I want to build with.
        </p>

        <p className="mt-10 text-amber-200 text-3xl font-semibold font-romantic">
          Someone who feels like a goddess —
        </p>

        <p className="text-amber-200 text-2xl font-semibold font-romantic">
          not because she demands it,
        </p>

        <p className="text-amber-200 text-2xl font-semibold font-romantic">
          but because she simply is.
        </p>

      </div>
    </section>
  );
}