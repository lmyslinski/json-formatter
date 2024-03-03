import { create } from "zustand";
export interface JsonState {
  input: string;
  error: null | string;
  setInput: (input: string) => void;
  json: object | null;
  autoFix: boolean;
  setAutoFix: (autoFix: boolean) => void;
}

const getAutoFix = (): boolean => {
  return localStorage.getItem("autoFix") === "true";
};

export const useJsonStore = create<JsonState>((set) => ({
  input: "",
  json: null,
  error: null,
  setInput: (input: string) => {
    set({ input: input });
    if (!input) return;
    try {
      const obj = JSON.parse(input);
      set(() => ({ json: obj, error: null }));
    } catch (e) {
      set(() => ({ json: null, error: `Invalid JSON: ${e}` }));
    }
  },
  autoFix: getAutoFix(),
  setAutoFix: (autoFix: boolean) => {
    localStorage.setItem("autoFix", autoFix.toString());
    set(() => ({ autoFix: autoFix }));
  },
}));
