export default function Link({ link = "Link" }) {
  return (
    <li className="font-medium text-5xl transition-all hover:text-bold">
      {link}
    </li>
  );
}
