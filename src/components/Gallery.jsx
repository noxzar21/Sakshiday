import { motion } from "motion/react";
import { useState } from "react";

export default function Gallery() {
  const [flipped, setFlipped] = useState(null);

  const captions = {
    1: "This smile right here is the one that fixes my worst days.",
    2: "The way you carry yourself… you probably don't even realize how beautiful you look here.",
    3: "Moments like this remind me how lucky I am that you exist in my world.",
    4: "This is the version of you I want to protect, adore, and grow with."
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-6 py-20 text-center text-gray-200">

      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-3xl sm:text-5xl font-romantic mb-16"
      >
        The Girl Who Owns My Night Sky
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 max-w-4xl w-full">

        {[1,2,3,4].map((num) => (
          <div
            key={num}
            className="relative w-full h-[420px] cursor-pointer perspective-1000"
            onClick={() => setFlipped(flipped === num ? null : num)}
          >

            <motion.div
              animate={{ rotateY: flipped === num ? 180 : 0 }}
              transition={{ duration: 0.7 }}
              className="relative w-full h-full"
              style={{ transformStyle: "preserve-3d" }}
            >

              {/* FRONT */}
              <div
                className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl border border-white/20 bg-black flex items-center justify-center"
                style={{ backfaceVisibility: "hidden" }}
              >
                <img
                  src={`/photos/${num}.jpeg`}
                  alt="Sakshi"
                  className="max-h-full max-w-full object-contain"
                />
              </div>

              {/* BACK */}
              <div
                className="absolute inset-0 rounded-3xl flex items-center justify-center p-8 text-center
                bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl"
                style={{
                  transform: "rotateY(180deg)",
                  backfaceVisibility: "hidden"
                }}
              >
                <p className="font-romantic text-lg sm:text-xl text-amber-100 leading-relaxed">
                  {captions[num]}
                </p>
              </div>

            </motion.div>
          </div>
        ))}

      </div>

    </section>
  );
}