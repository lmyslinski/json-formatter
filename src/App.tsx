import Editor from "./components/editor";
import Header from "./components/header";
import Output from "./components/output";
import { ThemeProvider } from "./components/theme-provider";

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <Header />
      <Editor />
      <Output />
    </ThemeProvider>
  );
}

export default App;
