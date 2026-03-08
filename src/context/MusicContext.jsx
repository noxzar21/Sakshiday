import { createContext, useContext, useRef, useState } from "react";
import { Howl } from "howler";

const MusicContext = createContext();

export function MusicProvider({ children }) {
  const [playing, setPlaying] = useState(false);
  const soundRef = useRef(
    new Howl({
      src: ["/music.mp3"],
      loop: true,
      volume: 0.6,
      html5: true
    })
  );

  const playMusic = () => {
    const sound = soundRef.current;

    if (!sound.playing()) {
      sound.play();
      setPlaying(true);
    }
  };

  const pauseMusic = () => {
    const sound = soundRef.current;

    if (sound.playing()) {
      sound.pause();
      setPlaying(false);
    }
  };

  const toggleMusic = () => {
    if (playing) {
      pauseMusic();
    } else {
      playMusic();
    }
  };

  return (
    <MusicContext.Provider
      value={{ playing, playMusic, pauseMusic, toggleMusic }}
    >
      {children}
    </MusicContext.Provider>
  );
}

export const useMusic = () => useContext(MusicContext);