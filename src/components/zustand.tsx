import { create } from "zustand";
import { jsonrepair } from "jsonrepair";

interface AppState {
  input: string;
  error: null | string;
  setInput: (input: string, autoFix: boolean) => void;
  json: object | null;
  autoFix: boolean;
  setAutoFix: (autoFix: boolean) => void;
}

export const useZustand = create<AppState>((set) => ({
  input: "",
  json: null,
  error: null,
  setInput: (input: string, autoFix: boolean) => {
    set({ input: input });
    if (!input) return;
    validateAndSet(input, autoFix, set);
  },
  autoFix: localStorage.getItem("autoFix") === "true",
  setAutoFix: (autoFix: boolean) => {
    localStorage.setItem("autoFix", autoFix.toString());
    set(() => ({ autoFix: autoFix }));
  },
}));

const validateAndSet = (
  input: string,
  autoFix: boolean,
  set: (partial: any) => void
): void => {
  try {
    const obj = JSON.parse(input);
    set(() => ({ json: obj, error: null }));
  } catch (e) {
    if (autoFix) {
      repairAndSet(input, set);
    } else {
      set(() => ({ json: null, error: `Invalid JSON: ${e}` }));
    }
  }
};

const repairAndSet = (input: string, set: any): void => {
  try {
    const repaired = jsonrepair(input);
    const obj = JSON.parse(repaired);
    set(() => ({ json: obj, error: null }));
  } catch (e) {
    set(() => ({ json: null, error: `Invalid JSON: ${e}` }));
  }
};
