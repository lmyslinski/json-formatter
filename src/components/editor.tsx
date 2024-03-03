import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { useJsonStore } from "./zustand";

export default function Editor() {
  const { json, setJson } = useJsonStore();

  return (
    <div className="flex flex-col items-center justify-center space-y-4 mt-8 xl:mt-16 px-8">
      <div className="flex-col w-full space-y-2">
        <Label htmlFor="message">Paste your json here </Label>
        <Textarea
          autoFocus={true}
          value={json}
          onChange={(e) => setJson(e.target.value)}
          placeholder="Json input"
          id="message"
          className="h-80"
        />
      </div>
    </div>
  );
}
