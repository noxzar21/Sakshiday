import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import BackgroundEffects from "./BackgroundEffects";

export default function PasswordGate({ children }) {
  const [password, setPassword] = useState("");
  const [unlocked, setUnlocked] = useState(false);
  const [error, setError] = useState(false);

  const SITE_PASSWORD = "Shree"; // change this

  const handleUnlock = () => {
    if (password === SITE_PASSWORD) {
      setUnlocked(true);
    } else {
      setError(true);
    }
  };

  return (
    <AnimatePresence mode="wait">
      {!unlocked ? (
        <motion.div
          key="lock"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="relative min-h-screen flex items-center justify-center text-gray-200 px-6"
        >
          {/* Same background as site */}
          <BackgroundEffects />

          {/* Lock Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="relative z-10 bg-white/10 backdrop-blur-xl p-10 rounded-3xl border border-white/20 shadow-2xl text-center max-w-md w-full"
          >
            <h1 className="text-3xl font-romantic mb-6">
              A moment meant only for you
            </h1>

            <p className="text-gray-300 mb-6">
              If you're Sakshi, you'll know the password.
            </p>

            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError(false);
              }}
              className="w-full p-3 rounded-xl bg-black/40 border border-white/20 outline-none text-center"
            />

            <button
              onClick={handleUnlock}
              className="mt-6 px-6 py-3 rounded-full bg-gradient-to-r from-rose-300/30 to-amber-200/30 border border-white/20 hover:scale-105 transition"
            >
              Unlock
            </button>

            {error && (
              <p className="text-red-400 mt-4 text-sm">
                Hmm… that doesn't seem right.
              </p>
            )}
          </motion.div>
        </motion.div>
      ) : (
        <motion.div
          key="site"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}