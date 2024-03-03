import { create } from "zustand";

export interface JsonState {
  json: string;
  setJson: (input: string) => void;
}

export const useJsonStore = create<JsonState>((set) => ({
  json: "",
  setJson: (input: string) => {
    console.log("setting " + input);
    set(() => ({ json: input }));
  },
}));
