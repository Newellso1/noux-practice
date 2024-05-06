import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faXTwitter,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import logo from "../Assets/logo.png";
import splash from "../Assets/MenuSplash.png";
import MenuOption from "./MenuOption";

export default function MainPage() {
  return (
    <div className=" px-4 py-6 flex bg-purple w-dvw h-dvh">
      <div className="flex flex-col justify-between">
        <div className="logo w-22">
          <img src={logo} alt="logo" />
        </div>
        <div className="socials w-fit ml-2 mb-44">
          <div className=" w-fit flex flex-col gap-4">
            <div className="w-12 h-12 flex justify-center items-center rounded-full bg-lightPurple bg-opacity-80 transition-all hover:bg-opacity-100">
              <FontAwesomeIcon icon={faXTwitter} className=" w-12  text-2xl" />
            </div>
            <div className="w-12 h-12 flex justify-center items-center rounded-full bg-lightPurple bg-opacity-80 transition-all hover:bg-opacity-100">
              <FontAwesomeIcon
                icon={faLinkedinIn}
                className=" w-12  text-2xl"
              />
            </div>
            <div className="w-12 h-12 flex justify-center items-center rounded-full bg-lightPurple bg-opacity-80 transition-all hover:bg-opacity-100">
              <FontAwesomeIcon icon={faInstagram} className=" w-12  text-2xl" />
            </div>
          </div>
        </div>

        <div className="contact opacity-80">
          <div className="flex flex-col text-xs gap-1">
            <p className="font-bold">Contact us</p>
            <p>07789 123 456</p>
            <p className=" cursor-pointer">hello@nouxtalent.co.uk</p>
          </div>
        </div>
      </div>
      <div className="middle grow flex justify-center items-center">
        <div className="flex gap-14 justify-center items-center  container">
          <div className="middle-left">
            <img src={splash} alt="menu splash" className=" w-60 min-w-60" />
          </div>
          <div className="middle-right min-w-fit">
            <ul className="  flex flex-col gap-4 w-fit">
              <li className="text-sm p-0">Menu</li>
              <MenuOption link="Who are we?" />
              <MenuOption link="Grow your team" />
              <MenuOption link="Find a role" />
              <MenuOption link="Contact" />
            </ul>
          </div>
        </div>
      </div>
      <div className="right flex flex-col justify-between items-end">
        <div>
          <div className="button cursor-pointer flex justify-center items-center border-2 rounded-full py-1 px-3 opacity-80 transition-opacity hover:opacity-100">
            <div className="text-xs">Close</div>
            <div>
              <FontAwesomeIcon icon={faX} className="ml-2" />
            </div>
          </div>
        </div>
        <div>
          <div className="text-right opacity-80">
            <div className="flex flex-col text-xs gap-1">
              <p className="font-bold">Legal</p>
              <p className="cursor-pointer">Privacy Policy and Cookies</p>
              <p>© Noux Talent 2024</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// <div className="button flex items-center justify-center border-2 py-2 px-4 rounded-full">
//           Close <FontAwesomeIcon className=" ml-2" icon={faX} />
//         </div>
