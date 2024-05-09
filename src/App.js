import { useState } from "react";
import MainPageResponsive from "./Components/MainPageResponsive";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleMenuOpen = () => setMenuOpen(!menuOpen);

  return (
    <div className="App w-dvw h-dvh overflow-x-hidden relative ">
      <div className="fixed top-0 w-dvw">
        <Navbar handleMenuOpen={handleMenuOpen} menuOpen={menuOpen} />
      </div>
      <div className="pt-40">
        <Hero />
      </div>
      <div
        className={`${
          menuOpen ? `-translate-x-0` : `-translate-x-full`
        } transition-all absolute top-0`}
      >
        <MainPageResponsive handleMenuOpen={handleMenuOpen} />
      </div>
    </div>
  );
}

export default App;
