import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import logo from "../Assets/logo.png";
import Contact from "./Contact";
import Menu from "./Menu";
import Privacy from "./Privacy";
import Socials from "./Socials";

export default function MainPageResponsive({ handleMenuOpen }) {
  return (
    <div className=" flex flex-col h-dvh  bg-purple text-center p-4 md:pt-8 w-dvw overflow-hidden">
      <div
        onClick={handleMenuOpen}
        className="absolute top-2 right-4 text-4xl md:hidden"
      >
        <FontAwesomeIcon icon={faXmark} />
      </div>
      <div className="top  flex grow flex-col gap-16 justify-center items-center mt-14 md:mt-0  md:flex-row ">
        <div className="flex flex-col md:h-full md:gap-48">
          <img src={logo} alt="logo" className=" md:place-self-start md:w-20" />
          <div className="hidden md:inline">
            <Socials />
          </div>
        </div>
        <div className=" md:ml-14 md:flex md:justify-center md:items-center md:grow md:text-left">
          <Menu />
        </div>
        <div className="md:collapse">
          <Socials />
        </div>
        <div className="hidden md:place-self-start md:inline opacity-80 transition-all hover:opacity-100 cursor-pointer">
          <div
            onClick={handleMenuOpen}
            className="flex justify-center gap-2 items-center border-2 rounded-full px-4 py-1"
          >
            <div className="text-sm">Close</div>
            <FontAwesomeIcon className=" text-l" icon={faXmark} />
          </div>
        </div>
      </div>
      <div className="bottom flex flex-col justify-between p-2 gap-20 md:flex-row ">
        <Contact />
        <Privacy />
      </div>
    </div>
  );
}
