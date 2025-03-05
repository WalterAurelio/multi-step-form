import { z } from "zod";

export const dataSchema = z.object({
  name: z.string().min(3),
  email: z.string().email(),
  phoneNumber: z.number().min(6),
  plan: z.object({
    name: z.string(),
    price: z.number()
  }),
  isMonthly: z.boolean(),
  addOns: z.union([z.undefined(), z.array(z.object({
    name: z.string(),
    price: z.number()
  }))])
});

export type TDataSchema = z.infer<typeof dataSchema>;