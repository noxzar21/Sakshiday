import { motion } from "motion/react";
import { useState } from "react";

export default function Letter() {
  const [showHidden, setShowHidden] = useState(false);

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

  const hiddenPoem = [
    "When someone's smile makes your Her happiness, to last forever, makes you pray;",
    "",
    "Her arms feels lika a sheltered cove, her kind face similer to a sacred grove.",
    "",
    "Her beauty to cherish forever, Eyes as gorgeous as peacock's feather;",
    "when her sadness makes you a griever,",
    "but all u need is to be together.",
    "",
    "When the distances makes you wither,",
    "with memories both sweet and bitter;",
    "",
    "wishing to reside in her honest heart,",
    "desiring her care and to be her forever counterpart.",
    "",
    "Then your love for her bear no bounds,",
    "Maybe the love of your life has been found;",
    "",
    "But the utmost feeling of love cannot be contained,",
    "In the poem which I extend."
  ];

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 py-20">

        <motion.h2
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 1 }}
  className="text-3xl sm:text-4xl font-semibold mb-10 text-gray-200"
>
  For the girl who deserves to be adored —
</motion.h2>

<motion.p
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ delay: 0.3 }}
  className="mb-12 text-lg text-gray-200 max-w-xl mx-auto leading-relaxed"
>
  Not just today.  
  Not just because it’s your birthday.  
  But because you are you.
</motion.p>

      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.25 } }
        }}
        className="bg-white/10 backdrop-blur-xl p-10 rounded-3xl max-w-2xl text-gray-200 border border-white/10 shadow-2xl font-romantic leading-relaxed text-lg"
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

        {!showHidden && (
          <motion.button
            whileHover={{ scale: 1.05 }}
            onClick={() => setShowHidden(true)}
            className="mt-8 px-6 py-3 bg-white/30 rounded-full shadow-lg"
          >
            There's something else...
          </motion.button>
        )}
      </motion.div>

      {showHidden && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mt-16 max-w-2xl text-center space-y-3 text-base sm:text-lg leading-relaxed"
        >
          {hiddenPoem.map((line, i) => (
            <motion.p key={i}>{line}</motion.p>
          ))}
        </motion.div>
      )}

    </section>
  );
}