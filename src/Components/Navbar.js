import logoDark from "../Assets/logo-dark.png";

export default function Navbar({ handleMenuOpen, menuOpen }) {
  return (
    <div>
      <div className=" flex border-2 justify-between items-center w-dvh px-6 py-6 md:px-6 gap-10">
        <div>
          <img src={logoDark} alt="logo dark" className="w-28" />
        </div>
        <div className="flex grow justify-center items-center collapse md:visible justify-self-center gap-20 font-medium">
          <p className="text-black text-">Who are we</p>
          <p className="text-black text-">Grow your team</p>
          <p className="text-black text-">Find a role</p>
          <p className="text-black text-">Contact</p>
        </div>
        <div
          onClick={handleMenuOpen}
          className=" flex flex-col justify-center items-center gap-1.5 cursor-pointer w-fit h-fit"
        >
          <div
            className={`w-8 h-1 block rounded-sm bg-purple transition-all  ${
              menuOpen ? `rotate-45 translate-y-1` : `rotate-0`
            }`}
          ></div>
          <div
            className={`w-8 h-1 block rounded-sm bg-purple transition-all ${
              menuOpen ? `-rotate-45 -translate-y-1.5` : `rotate-0`
            }`}
          ></div>
        </div>
      </div>
    </div>
  );
}
