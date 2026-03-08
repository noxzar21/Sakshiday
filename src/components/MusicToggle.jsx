import { useMusic } from "../context/MusicContext";

export default function MusicToggle() {
  const { playing, toggleMusic } = useMusic();

  return (
    <button
      onClick={toggleMusic}
      className="fixed top-6 right-6 z-50 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sm text-gray-200 hover:bg-white/20 transition"
    >
      {playing ? "Pause Music" : "Play Music"}
    </button>
  );
}