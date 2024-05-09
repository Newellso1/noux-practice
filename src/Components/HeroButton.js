import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function HeroButton({ text = "button" }) {
  return (
    <div className="group hover:bg-bold hover:border-bold flex gap-2 justify-center items-center text-black py-2 px-4 border-2 rounded-full border-black w-56">
      <p className="group-hover:text-text text-lg ">{text}</p>
      <div className=" ">
        <FontAwesomeIcon
          className="-rotate-45 text-xl group-hover:text-text  "
          icon={faArrowRight}
        />
      </div>
    </div>
  );
}
