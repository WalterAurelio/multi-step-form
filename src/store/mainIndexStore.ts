import { create } from "zustand";

interface IMainIndex {
  mainIndex: number;
  setMainIndex: (value: number) => void;
}

export const useMainIndexStore = create<IMainIndex>((set) => ({
  mainIndex: 1,
  setMainIndex: (value) => {
    set({ mainIndex: value });
  }
}));