import { create } from "zustand";

interface ISelectedPlanIndex {
  selectedIndex: number;
  setSelectedIndex: (value: number) => void;
}

export const useSelectedPlanIndex = create<ISelectedPlanIndex>((set) => ({
  selectedIndex: 0,
  setSelectedIndex: (value) => {
    set({ selectedIndex: value });
  }
}));