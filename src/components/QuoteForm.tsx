"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { quoteFormSchema, type QuoteFormValues } from "@/lib/schemas";
import { SECTORS } from "@/lib/config";
import { cn } from "@/lib/utils";

const inputClasses =
  "w-full border border-ink/20 bg-bg px-4 py-3 text-ink placeholder:text-ink/35 focus:outline-none focus:border-ink";

export function QuoteForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<QuoteFormValues>({
    resolver: zodResolver(quoteFormSchema),
  });

  async function onSubmit(values: QuoteFormValues) {
    const res = await fetch("/api/quote", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });
    if (res.ok) {
      setSubmitted(true);
    }
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-start gap-2 border border-ink/10 bg-paper p-10">
        <p className="text-3xl font-bold leading-tight tracking-tight text-ink md:text-4xl">
          Got it. We&apos;ll be in touch within 24 hours.
        </p>
        <p className="text-muted">
          Thanks for reaching out to Memphis Cleaning Company.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="flex flex-col gap-6"
    >
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <Field label="Full name" error={errors.name?.message}>
          <input
            className={inputClasses}
            placeholder="Jordan Smith"
            {...register("name")}
          />
        </Field>
        <Field label="Company" error={errors.company?.message}>
          <input
            className={inputClasses}
            placeholder="Acme Block Management"
            {...register("company")}
          />
        </Field>
        <Field label="Email" error={errors.email?.message}>
          <input
            type="email"
            className={inputClasses}
            placeholder="jordan@acme.co.uk"
            {...register("email")}
          />
        </Field>
        <Field label="Phone" error={errors.phone?.message}>
          <input
            type="tel"
            className={inputClasses}
            placeholder="07000 000000"
            {...register("phone")}
          />
        </Field>
        <Field label="Sector" error={errors.sector?.message}>
          <select className={inputClasses} defaultValue="" {...register("sector")}>
            <option value="" disabled>
              Select a sector
            </option>
            {SECTORS.map((sector) => (
              <option key={sector} value={sector}>
                {sector}
              </option>
            ))}
            <option value="Other">Other</option>
          </select>
        </Field>
        <Field label="Property size" error={errors.propertySize?.message}>
          <input
            className={inputClasses}
            placeholder="e.g. 40 flats / 8,000 sqft"
            {...register("propertySize")}
          />
        </Field>
      </div>

      <Field label="Tell us about the job" error={errors.message?.message}>
        <textarea
          rows={5}
          className={cn(inputClasses, "resize-none")}
          placeholder="Frequency, number of units, current provider, anything else we should know..."
          {...register("message")}
        />
      </Field>

      <button
        type="submit"
        disabled={isSubmitting}
        className="self-start bg-red px-8 py-4 text-lg font-semibold text-bg transition-colors hover:bg-ink disabled:opacity-60"
      >
        {isSubmitting ? "Sending..." : "Request a Quote"}
      </button>
    </form>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="flex flex-col gap-2">
      <span className="text-sm font-semibold uppercase tracking-wide text-ink">
        {label}
      </span>
      {children}
      {error && <span className="text-sm font-medium text-red">{error}</span>}
    </label>
  );
}
