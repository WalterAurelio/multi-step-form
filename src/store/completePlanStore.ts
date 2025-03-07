import { create } from 'zustand';
import { TDataSchema } from '../schemas/dataSchema';
import { createJSONStorage, persist } from 'zustand/middleware';

type completePlanSchema = Partial<TDataSchema> & {
  setData: (data: Partial<TDataSchema>) => void
};

export const useCompletePlanStore = create<completePlanSchema>()(
  persist((set) => ({
    setData: (data) => set(data)
  }), {
    name: 'complete-plan-storage',
    storage: createJSONStorage(() => localStorage)
  })
);
/* export const useCompletePlanStore = create<completePlanSchema>((set) => ({
  setData: (data) => set(data)
})); */
