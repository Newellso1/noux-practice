import logo from "../Assets/logo.png";
import Contact from "./Contact";
import Menu from "./Menu";
import Privacy from "./Privacy";
import Socials from "./Socials";

export default function MainPageResponsive() {
  return (
    <div className=" flex flex-col h-dvh bg-purple text-center p-4">
      <div className="top border-2 flex grow flex-col gap-16 items-center mt-14">
        <img src={logo} alt="logo" />
        <Menu />
        <Socials />
      </div>
      <div className="bottom border-2 min-h-52 flex flex-col justify-between p-2 ">
        <Contact />
        <Privacy />
      </div>
    </div>
  );
}
