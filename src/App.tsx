import Header from "./components/header";
import { ThemeProvider } from "./components/theme-provider";
import { Label } from "./components/ui/label";
import { Textarea } from "./components/ui/textarea";

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <Header />
      <div className="flex flex-col items-center justify-center space-y-4 mt-8 xl:mt-16 px-8">
        <div className="flex-col w-full space-y-2">
          <Label htmlFor="message">Paste your json here </Label>
          <Textarea autoFocus={true} placeholder="Json input" id="message" className="h-80" />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
