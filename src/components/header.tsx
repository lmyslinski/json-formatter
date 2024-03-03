import { GithubIcon } from "./github-icon";
import { ModeToggle } from "./mode-toggle";

export default function Header() {
  return (
    <div className="w-full border-b py-2 px-8">
      <div className="flex justify-between w-full">
        <div className="flex items-center">
          <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
            json formatter
          </h3>
        </div>
        <div className="items-center">
          <GithubIcon />
          <ModeToggle />
        </div>
      </div>
    </div>
  );
}
