import { ModeToggle } from "./components/mode-toggle";
import { ThemeProvider } from "./components/theme-provider";
import { GithubIcon } from "./components/github-icon";

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <div className="w-full border-b py-2 px-8">
        <div className="flex justify-between w-full">
          <div className="flex items-center">
            <span className="inline-block font-bold">json formatter</span>
          </div>
          <div className="items-center">
            <GithubIcon />
            <ModeToggle />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
