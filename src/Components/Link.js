export default function Link({ link = "Link" }) {
  return (
    <li className="font-medium text-5xl overflow-hidden">
      <div className="relative">
        <div className="md:flex gap-4 relative md:right-5 transition-all md:hover:right-0">
          <div className="bg-bold w-1 hidden md:inline"></div>
          <div className="transition-all hover:text-bold">{link}</div>
        </div>
      </div>
    </li>
  );
}
