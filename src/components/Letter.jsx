import { motion } from "motion/react";
import { useState, useRef } from "react";
import { useMusic } from "../context/MusicContext";

export default function Letter() {
  const [showVideo, setShowVideo] = useState(false);
  const videoRef = useRef(null);

  const { pauseMusic, playMusic } = useMusic();

  const mainPoem = [
    "I dedicate this to you, the one who brings out the best in me too.",
    "Loving you is such bliss, a feeling sealed with a tender kiss.",
    "If you could see yourself through my eyes,",
    "You'd understand how enlivened I am, my precious prize.",
    "",
    "You shine like an angel, lighting my world,",
    "Turning this solemn realm to a place where dreams are hurled.",
    "If portraying my love for you were a curse,",
    "I'd happily ascend within your bask, my heart's nurse.",
    "",
    "For my existence, it'd be a bane,",
    "To part ways with you, a love so plain.",
    "Like a moonless night or a withered bloom,",
    "Life would descend into endless gloom.",
    "",
    "It tears my heart to see you doubt your worth,",
    "When to me, you're the greatest gift on this Earth.",
    "Your self- degrading words bring sorrow deep,",
    "For in your eyes, your beauty's far too steep.",
    "I wish for you to see the love I see,",
    "To know you're deserving,",
    "as you are to me."
  ];

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 py-20 text-center text-gray-200">

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-3xl sm:text-4xl font-romantic font-light mb-10"
      >
        For the girl who deserves to be adored —
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="mb-12 text-lg text-gray-300 max-w-xl leading-relaxed"
      >
        Not just today.  
        Not just because it’s your birthday.  
        But because you are you.
      </motion.p>

      {/* Main Poem Card */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.2 } }
        }}
        className="bg-white/10 backdrop-blur-xl p-10 rounded-3xl max-w-2xl border border-white/10 shadow-2xl font-romantic leading-relaxed text-lg"
      >
        {mainPoem.map((line, i) => (
          <motion.p
            key={i}
            variants={{
              hidden: { opacity: 0, y: 15 },
              visible: { opacity: 1, y: 0 }
            }}
          >
            {line}
          </motion.p>
        ))}

        {!showVideo && (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowVideo(true)}
            className="mt-10 px-8 py-3 bg-gradient-to-r from-amber-200/20 to-rose-200/20 border border-white/20 rounded-full text-amber-100 font-medium transition"
          >
            There's something I need to tell you...
          </motion.button>
        )}
      </motion.div>

      {/* Video Reveal */}
      {showVideo && (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mt-16 bg-white/10 backdrop-blur-xl p-6 rounded-3xl border border-white/20 shadow-2xl max-w-3xl w-full"
        >
          <video
            ref={videoRef}
            controls
            className="rounded-2xl w-full"
            onPlay={() => pauseMusic()}
            onPause={() => playMusic()}
            onEnded={() => playMusic()}
          >
            <source src="/video/sakshi-birthday.mp4" type="video/mp4" />
          </video>
        </motion.div>
      )}

    </section>
  );
}