import { create } from 'zustand';

interface IIsPlanMonthly {
  isPlanMonthly: boolean;
  setIsPlanMonthly: (value: boolean) => void;
}

export const useIsPlanMonthlyStore = create<IIsPlanMonthly>((set) => ({
  isPlanMonthly: true,
  setIsPlanMonthly: (value: boolean) => {
    set({ isPlanMonthly: value });
  }
}))