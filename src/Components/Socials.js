import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faInstagram,
  faXTwitter,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

export default function Socials() {
  return (
    <div className="flex gap-6">
      <div className="flex justify-center items-center text-3xl size-14 bg-lightPurple rounded-full bg-opacity-80 transition-all hover:bg-opacity-100">
        <FontAwesomeIcon icon={faXTwitter} />
      </div>
      <div className="flex justify-center items-center text-3xl size-14 bg-lightPurple rounded-full bg-opacity-80 transition-all hover:bg-opacity-100">
        <FontAwesomeIcon icon={faLinkedinIn} />
      </div>
      <div className="flex justify-center items-center text-3xl size-14 bg-lightPurple rounded-full bg-opacity-80 transition-all hover:bg-opacity-100">
        <FontAwesomeIcon icon={faInstagram} />
      </div>
    </div>
  );
}
