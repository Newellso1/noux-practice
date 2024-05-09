import HeroButton from "./HeroButton";

export default function Hero() {
  return (
    <div className="p-3 tracking-wide flex flex-col gap-6">
      <div>
        <p className="text-4xl text-black  leading-15 font-medium">
          Supporting founders and leaders to build
          <br />
          <span className=" text-bold font-bold">diverse</span> teams, shaping{" "}
          the <span className=" text-bold font-bold">future</span> of tech
          talent
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <p className=" text-lg text-black opacity-80">
          We’re advocates for change, challenge industry norms to create
          opportunities for underrepresented voices.{" "}
        </p>
        <div className="flex flex-col gap-4">
          <HeroButton text="Grow your team" />
          <HeroButton text="Find your new role" />
        </div>
      </div>
    </div>
  );
}
