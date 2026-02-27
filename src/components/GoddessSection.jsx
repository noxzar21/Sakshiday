import { motion } from "motion/react";

export default function GoddessSection() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 text-gray-200">

      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-3xl sm:text-5xl font-light mb-12"
      >
        You were never meant to be compared.
      </motion.h2>

      <div className="max-w-2xl space-y-6 text-xl sm:text-2xl leading-relaxed">

        <p>The moon doesn’t compete with the stars.</p>
        <p>The ocean doesn’t question its depth.</p>
        <p>And you… don’t need to prove your worth.</p>

        <p className="mt-10">
          You don’t need validation.
        </p>

        <p>
          You don’t need comparison.
        </p>

        <p className="mt-8 font-semibold text-white">
          You walk into a room and the world adjusts.
        </p>

        <p className="mt-6 text-gray-300">
          That’s not confidence.
          <br />
          That’s presence.
        </p>

        <p className="mt-8 text-amber-200 text-2xl font-semibold font-romantic tracking-wide">
  That’s what it feels like to stand before a goddess.
</p>

      </div>

    </section>
  );
}