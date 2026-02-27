import { motion } from "motion/react";

export default function Gallery() {

  const positions = {
    1: "object-center",
    2: "object-top",      // red saree image — keeps face visible
    3: "object-center",
    4: "object-center",
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-6 text-center text-gray-200">

      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-3xl sm:text-5xl mb-16"
      >
        The Girl Who Owns My Night Sky
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-4xl w-full">

        {[1, 2, 3, 4].map((num) => (
          <motion.div
            key={num}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="relative aspect-3/4 rounded-3xl overflow-hidden shadow-2xl border border-white/20 group transform transition duration-500 hover:scale-[1.03]"
          >
            <img
              src={`/photos/${num}.jpeg`}
              alt="Sakshi"
              className={`w-full h-full object-cover ${positions[num]}`}
            />

            <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent opacity-70" />

            {/* subtle hover glow */}
            <div className="absolute inset-0 rounded-3xl border border-white/10 group-hover:border-white/30 transition-all duration-500" />
          </motion.div>
        ))}

      </div>

    </section>
  );
}