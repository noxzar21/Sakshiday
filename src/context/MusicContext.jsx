   import { createContext, useContext, useRef, useState } from "react";
import { Howl } from "howler";

const MusicContext = createContext();

export function MusicProvider({ children }) {
  const [playing, setPlaying] = useState(false);
  const soundRef = useRef(null);

  if (!soundRef.current) {
    soundRef.current = new Howl({
      src: ["/music.mp3"],
      loop: true,
      volume: 0.6,
    });
  }

  const playMusic = () => {
    soundRef.current.play();
    setPlaying(true);
  };

  const pauseMusic = () => {
    soundRef.current.pause();
    setPlaying(false);
  };

  const toggleMusic = () => {
    if (playing) pauseMusic();
    else playMusic();
  };

  return (
    <MusicContext.Provider
      value={{ playing, toggleMusic, playMusic, pauseMusic }}
    >
      {children}
    </MusicContext.Provider>
  );
}

export const useMusic = () => useContext(MusicContext);