import Link from "./Link";

export default function Menu() {
  return (
    <ul className="flex flex-col gap-4">
      <li>Menu</li>
      <Link link="Who are we?" />
      <Link link="Grow your team" />
      <Link link="Find a role" />
      <Link link="Contact" />
    </ul>
  );
}
