import { useState, useRef, useEffect } from "react";
import { Howl } from "howler";

export default function MusicToggle() {
  const [playing, setPlaying] = useState(false);
  const soundRef = useRef(null);

  useEffect(() => {
    soundRef.current = new Howl({
      src: ["/music.mp3"],
      loop: true,
      volume: 0.6,
    });

    return () => {
      soundRef.current.stop();
      soundRef.current.unload();
    };
  }, []);

  const toggleMusic = () => {
    if (!soundRef.current) return;

    if (playing) {
  soundRef.current.fade(0.6, 0, 500);
  setTimeout(() => soundRef.current.pause(), 500);
} else {
  soundRef.current.play();
  soundRef.current.fade(0, 0.6, 500);
}

    setPlaying(!playing);
  };

  return (
    <button
      onClick={toggleMusic}
      className="fixed top-6 right-6 z-50 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sm text-gray-200 hover:bg-white/20 transition"
    >
      {playing ? "Pause" : "Play"}
    </button>
  );
}