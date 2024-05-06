export default function MenuOption({ link = "Link title" }) {
  return (
    <li className="flex  group cursor-pointer  w-96">
      <div className=" w-0  h-fill bg-bold transition-all group-hover:w-1 group-hover:mr-4 "></div>
      <div className="  text-5xl transition-all group-hover:text-bold">
        {link}
      </div>
    </li>
  );
}
