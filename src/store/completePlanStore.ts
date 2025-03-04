import { create } from 'zustand';

type Plan = {
  name: string;
  price: number;
};

type AddOn = Plan;

interface ICompletePlan {
  selectedPlan: Plan;
  selectedAddOns: AddOn[] | undefined;
}

export const useCompletePlanStore = create<ICompletePlan>(() => ({
  selectedPlan: {
    name: 'Arcade',
    price: 9
  },
  selectedAddOns: undefined
}));
