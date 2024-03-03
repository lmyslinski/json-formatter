import { Label } from "./ui/label";
import { useJsonStore } from "./zustand";

export default function Output() {
  const { json } = useJsonStore();
  return (
    <div className="flex flex-col items-center justify-center px-8 mt-8">
      <div className="flex-col w-full space-y-2">
        <Label htmlFor="message">Output: </Label>
        <p>{json}</p>
      </div>
    </div>
  );
}
