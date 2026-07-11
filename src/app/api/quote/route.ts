import { NextResponse } from "next/server";
import { Resend } from "resend";
import { quoteFormSchema } from "@/lib/schemas";
import { CONTACT } from "@/lib/config";

export async function POST(request: Request) {
  const body = await request.json();
  const parsed = quoteFormSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, error: "Invalid submission" },
      { status: 400 }
    );
  }

  const values = parsed.data;
  const toAddress = process.env.QUOTE_TO_EMAIL || CONTACT.email;
  const apiKey = process.env.RESEND_API_KEY;

  const summary = `
New quote request

Name: ${values.name}
Company / property: ${values.company || "—"}
Email: ${values.email}
Phone: ${values.phone || "—"}
Property type: ${values.propertyType}
Services needed: ${values.servicesNeeded.join(", ")}
Location / postcode: ${values.location}
Message: ${values.message || "—"}
`.trim();

  if (!apiKey) {
    // No RESEND_API_KEY configured — log server-side so the flow is testable
    // without email credentials. See README for setup.
    console.log(summary);
    return NextResponse.json({ ok: true });
  }

  try {
    const resend = new Resend(apiKey);
    await resend.emails.send({
      from:
        process.env.RESEND_FROM_EMAIL ||
        "Memphis Cleaning & Maintenance <onboarding@resend.dev>",
      to: toAddress,
      replyTo: values.email,
      subject: `New quote request — ${values.name}`,
      text: summary,
    });
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Failed to send quote email", error);
    return NextResponse.json(
      { ok: false, error: "Failed to send" },
      { status: 502 }
    );
  }
}
