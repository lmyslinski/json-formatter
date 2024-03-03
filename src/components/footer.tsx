export default function Footer() {
  return (
    <div className="w-full border-b py-2 px-8 flex mt-auto">
      <div className="flex justify-between w-full">
        <div className="flex items-center">
          <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
            footer
          </h3>
        </div>
        <div className="flex items-center space-x-4">
          {/* <GithubIcon />
          <Separator orientation="vertical" />
          <ModeToggle /> */}
        </div>
      </div>
    </div>
  );
}
