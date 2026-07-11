import { NextResponse } from "next/server";
import { Resend } from "resend";
import { quoteFormSchema } from "@/lib/schemas";

const BUSINESS_INBOX = "cleaningservices.memphis@gmail.com";
const SENDER = "Memphis Property Services Website <onboarding@resend.dev>";

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
  const toAddress = process.env.QUOTE_TO_EMAIL || BUSINESS_INBOX;
  const apiKey = process.env.RESEND_API_KEY;

  const summary = `
Name: ${values.name}
Company: ${values.company || "Not provided"}
Email: ${values.email}
Phone: ${values.phone || "Not provided"}
Property type: ${values.propertyType}
Location: ${values.location}
Services needed: ${values.servicesNeeded.join(", ")}

Additional details:
${values.message || "None provided"}

---
Submitted via memphispropertyservices.co.uk
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
      from: process.env.RESEND_FROM_EMAIL || SENDER,
      to: toAddress,
      replyTo: values.email,
      subject: `New quote request from ${
        values.company || values.name
      } — Memphis Property Services`,
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
