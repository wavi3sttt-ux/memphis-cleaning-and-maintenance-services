"use client";

import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { quoteFormSchema, type QuoteFormValues } from "@/lib/schemas";
import { PROPERTY_TYPES, FORM_SERVICE_OPTIONS } from "@/lib/config";
import { cn } from "@/lib/utils";

const inputClasses =
  "w-full border border-ink/20 bg-bg px-4 py-3 text-ink placeholder:text-ink/35 focus:outline-none focus:border-ink";

export function QuoteForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<QuoteFormValues>({
    resolver: zodResolver(quoteFormSchema),
    defaultValues: { servicesNeeded: [] },
  });

  async function onSubmit(values: QuoteFormValues) {
    setSubmitError(false);
    const res = await fetch("/api/quote", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });
    if (res.ok) {
      setSubmitted(true);
    } else {
      setSubmitError(true);
    }
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-start gap-2 border border-ink/10 bg-paper p-10">
        <p className="text-3xl font-bold leading-tight tracking-tight text-ink md:text-4xl">
          Nice one — we&apos;ll be in touch shortly.
        </p>
        <p className="text-muted">
          Thanks for reaching out to Memphis Cleaning &amp; Maintenance.
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
        <Field label="Company / property name" error={errors.company?.message}>
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
        <Field label="Property type" error={errors.propertyType?.message}>
          <select
            className={inputClasses}
            defaultValue=""
            {...register("propertyType")}
          >
            <option value="" disabled>
              Select a property type
            </option>
            {PROPERTY_TYPES.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Location / postcode" error={errors.location?.message}>
          <input
            className={inputClasses}
            placeholder="B6 5RQ"
            {...register("location")}
          />
        </Field>
      </div>

      <Controller
        name="servicesNeeded"
        control={control}
        render={({ field }) => (
          <Field label="Services needed" error={errors.servicesNeeded?.message}>
            <div className="flex flex-wrap gap-4">
              {FORM_SERVICE_OPTIONS.map((option) => {
                const checked = field.value?.includes(option) ?? false;
                return (
                  <label
                    key={option}
                    className={cn(
                      "flex cursor-pointer items-center gap-2 border px-4 py-2.5 text-sm font-medium transition-colors",
                      checked
                        ? "border-ink bg-ink text-bg"
                        : "border-ink/20 text-ink hover:border-ink"
                    )}
                  >
                    <input
                      type="checkbox"
                      className="sr-only"
                      checked={checked}
                      onChange={(e) => {
                        const next = e.target.checked
                          ? [...(field.value ?? []), option]
                          : (field.value ?? []).filter((v) => v !== option);
                        field.onChange(next);
                      }}
                    />
                    {option}
                  </label>
                );
              })}
            </div>
          </Field>
        )}
      />

      <Field label="Message" error={errors.message?.message}>
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

      {submitError && (
        <p className="text-sm font-medium text-red">
          Something went wrong sending that — please try again, or email us
          directly.
        </p>
      )}
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
    <div className="flex flex-col gap-2">
      <span className="text-sm font-semibold uppercase tracking-wide text-ink">
        {label}
      </span>
      {children}
      {error && <span className="text-sm font-medium text-red">{error}</span>}
    </div>
  );
}
