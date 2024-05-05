import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import {
  faInstagram,
  faXTwitter,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import logo from "../Assets/logo.png";

export default function MainPage() {
  return (
    <div className=" px-4 py-6 flex bg-purple w-dvw h-dvh">
      <div className="flex flex-col justify-between border-2">
        <div className="logo w-22">
          <img src={logo} alt="logo" />
        </div>
        <div className="socials w-fit ml-2 mb-56">
          <div className=" w-fit flex flex-col gap-4">
            <div className="w-12 h-12 flex justify-center items-center rounded-full bg-lightPurple bg-opacity-90">
              <FontAwesomeIcon icon={faXTwitter} className=" w-12  text-2xl" />
            </div>
            <div className="w-12 h-12 flex justify-center items-center rounded-full bg-lightPurple bg-opacity-90">
              <FontAwesomeIcon
                icon={faLinkedinIn}
                className=" w-12  text-2xl"
              />
            </div>
            <div className="w-12 h-12 flex justify-center items-center rounded-full bg-lightPurple bg-opacity-90">
              <FontAwesomeIcon icon={faInstagram} className=" w-12  text-2xl" />
            </div>
          </div>
        </div>

        <div className="contact opacity-95">
          <div className="flex flex-col text-xs gap-1">
            <p className="font-bold">Contact us</p>
            <p>07789 123 456</p>
            <p>hello@nouxtalent.co.uk</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// <div className="button flex items-center justify-center border-2 py-2 px-4 rounded-full">
//           Close <FontAwesomeIcon className=" ml-2" icon={faX} />
//         </div>
