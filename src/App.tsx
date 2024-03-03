import Editor from "./components/editor";
import Footer from "./components/footer";
import Header from "./components/header";
import Output from "./components/output";
import { ThemeProvider } from "./components/theme-provider";

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <div className="min-h-screen flex flex-col">
        <Header />
        <Editor />
        <Output />
        <Footer />
      </div>
      
    </ThemeProvider>
  );
}

export default App;
