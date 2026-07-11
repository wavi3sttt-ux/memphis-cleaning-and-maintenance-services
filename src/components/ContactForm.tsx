"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema, type ContactFormValues } from "@/lib/schemas";
import { cn } from "@/lib/utils";

const inputClasses =
  "w-full border border-ink/20 bg-bg px-4 py-3 text-ink placeholder:text-ink/35 focus:outline-none focus:border-ink";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
  });

  async function onSubmit(values: ContactFormValues) {
    setSubmitError(false);
    const res = await fetch("/api/contact", {
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
          Message received — we&apos;ll be back to you shortly.
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
      <Field label="Full name" error={errors.name?.message}>
        <input
          className={inputClasses}
          placeholder="Jordan Smith"
          {...register("name")}
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

      <Field label="Subject" error={errors.subject?.message}>
        <input
          className={inputClasses}
          placeholder="What's this about?"
          {...register("subject")}
        />
      </Field>

      <Field label="Message" error={errors.message?.message}>
        <textarea
          rows={5}
          className={cn(inputClasses, "resize-none")}
          placeholder="How can we help?"
          {...register("message")}
        />
      </Field>

      <button
        type="submit"
        disabled={isSubmitting}
        className="self-start bg-red px-8 py-4 text-lg font-semibold text-bg transition-colors hover:bg-ink disabled:opacity-60"
      >
        {isSubmitting ? "Sending..." : "Send Message"}
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
