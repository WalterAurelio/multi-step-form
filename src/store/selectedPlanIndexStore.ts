import { create } from "zustand";

interface ISelectedPlanIndex {
  selectedPlanIndex: number;
  setSelectedPlanIndex: (value: number) => void;
}

export const useSelectedPlanIndex = create<ISelectedPlanIndex>((set) => ({
  selectedPlanIndex: 0,
  setSelectedPlanIndex: (value) => {
    set({ selectedPlanIndex: value });
  }
}));