import Link from "./Link";
import Splash from "../Assets/MenuSplash.png";

export default function Menu() {
  return (
    <div className="md:flex md:justify-center md:items-center md:gap-14">
      <div className="hidden md:inline">
        <img src={Splash} alt="Menu" className="min-w-60 max-w-60"></img>
      </div>
      <ul className="flex flex-col gap-4 md:gap-6">
        <li>Menu</li>
        <Link link="Who are we?" />
        <Link link="Grow your team" />
        <Link link="Find a role" />
        <Link link="Contact" />
      </ul>
    </div>
  );
}
