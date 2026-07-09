import { z } from "zod";
import { SECTORS } from "@/lib/config";

export const quoteFormSchema = z.object({
  name: z.string().min(2, "Enter your full name"),
  company: z.string().min(2, "Enter your company name"),
  email: z.string().email("Enter a valid email address"),
  phone: z.string().min(7, "Enter a valid phone number"),
  sector: z.enum([...SECTORS, "Other"], {
    message: "Select a sector",
  }),
  propertySize: z.string().min(1, "Tell us roughly how big the site is"),
  message: z.string().min(10, "Give us a few more details"),
});

export type QuoteFormValues = z.infer<typeof quoteFormSchema>;
