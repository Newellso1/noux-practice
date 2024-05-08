import { useState } from "react";
import MainPageResponsive from "./Components/MainPageResponsive";
import Navbar from "./Components/Navbar";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleMenuOpen = () => setMenuOpen(!menuOpen);

  return (
    <div className="App w-dvw h-dvh ">
      <div className="hidden">
        <MainPageResponsive />
      </div>
      <Navbar handleMenuOpen={handleMenuOpen} menuOpen={menuOpen} />
    </div>
  );
}

export default App;
