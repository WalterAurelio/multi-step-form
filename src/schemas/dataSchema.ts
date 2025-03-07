import { z } from "zod";

export const dataSchema = z.object({
  name: z.string().min(3),
  email: z.string().email(),
  phoneNumber: z.string().min(3),
  plan: z.string(),
  isMonthly: z.boolean(),
  addOns: z.array(z.string())
});

export type TDataSchema = z.infer<typeof dataSchema>;