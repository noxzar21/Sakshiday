import BackgroundEffects from "./components/BackgroundEffects";
import Hero from "./components/Hero";
import GoddessSection from "./components/GoddessSection";
import Letter from "./components/Letter";
import Gallery from "./components/Gallery";
import Finale from "./components/Finale";
import MusicToggle from "./components/MusicToggle";

export default function App() {
  return (
    <div className="relative text-white overflow-x-hidden scroll-smooth">
      <BackgroundEffects />
      <MusicToggle />
      <Hero />
      <GoddessSection />
      <Letter />
      <Gallery />
      <Finale />
    </div>
  );
}