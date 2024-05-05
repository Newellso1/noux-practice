export default function MenuOption({ link = "Link title" }) {
  return (
    <div className="">
      <div className="group flex overflow-hidden ">
        <div className="mr-4 relative -translate-x-full  transition-all group-hover:translate-x-0 ">
          <div className="w-2 h-full bg-text"></div>
        </div>
        <div className="text-5xl">{link}</div>
      </div>
    </div>
  );
}
