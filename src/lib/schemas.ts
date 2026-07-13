import { z } from "zod";
import { PROPERTY_TYPES, FORM_SERVICE_OPTIONS } from "@/lib/config";

export const quoteFormSchema = z.object({
  name: z.string().min(2, "Please enter your name"),
  company: z.string().optional(),
  email: z.string().email("Enter a valid email address"),
  phone: z.string().optional(),
  propertyType: z.enum(PROPERTY_TYPES, {
    message: "Select a property type",
  }),
  servicesNeeded: z
    .array(z.enum(FORM_SERVICE_OPTIONS))
    .min(1, "Select at least one service"),
  location: z
    .string()
    .min(2, "Enter a location or postcode so we can plan a site visit"),
  message: z.string().optional(),
});

export type QuoteFormValues = z.infer<typeof quoteFormSchema>;

export const contactFormSchema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Enter a valid email address"),
  subject: z.string().min(2, "Add a short subject line"),
  message: z
    .string()
    .min(
      10,
      "Tell us a bit more about what you need — a sentence or two is perfect"
    ),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
