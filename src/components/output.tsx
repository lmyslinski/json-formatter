import { useEffect } from "react";
import { useZustand } from "./zustand";
import hljs from "highlight.js/lib/core";
import json from "highlight.js/lib/languages/json";
import "highlight.js/styles/grayscale.css";
import { Copy } from "lucide-react";
import { Button } from "./ui/button";
import { useToast } from "./ui/use-toast";

// Then register the languages you need
hljs.registerLanguage("json", json);

export default function Output() {
  const { json, error } = useZustand();
  const { toast } = useToast();

  useEffect(() => {
    hljs.highlightAll();
  }, []);

  const highlightedCode = () => {
    if (json) {
      const str = JSON.stringify(json, null, 2);
      return str;
    } else {
      return "";
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(JSON.stringify(json, null, 2));
    toast({
      description: "Copied to clipboard.",
    });
  };

  return (
    <div className="flex flex-col items-center justify-center px-8 mt-8">
      <div className="flex-col w-full space-y-4">
        <div className="flex justify-between w-full">
          <small className="flex text-sm font-medium leading-none">
            Output
          </small>
          <small className="flex text-sm font-medium leading-none">
            {error}
          </small>
        </div>

        {json && (
          <pre className="border rounded-md border-input mt-3 relative">
            {" "}
            <div className="flex justify-end absolute top-2 right-2">
              {" "}
              <Button
                onClick={() => copyToClipboard()}
                variant="ghost"
                className="text-muted-foreground"
                size="icon"
              >
                <Copy />
              </Button>
            </div>
            <code className="language-json text-muted-foreground text-sm -mt-2 block px-4 pb-4">
              {highlightedCode()}
            </code>
          </pre>
        )}
      </div>
    </div>
  );
}
