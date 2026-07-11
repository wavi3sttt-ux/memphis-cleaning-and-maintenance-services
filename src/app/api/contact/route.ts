import { NextResponse } from "next/server";
import { Resend } from "resend";
import { contactFormSchema } from "@/lib/schemas";
import { CONTACT } from "@/lib/config";

export async function POST(request: Request) {
  const body = await request.json();
  const parsed = contactFormSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, error: "Invalid submission" },
      { status: 400 }
    );
  }

  const values = parsed.data;
  const toAddress = process.env.CONTACT_TO_EMAIL || CONTACT.email;
  const apiKey = process.env.RESEND_API_KEY;

  const summary = `
New contact message

Name: ${values.name}
Email: ${values.email}
Subject: ${values.subject}

${values.message}
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
      subject: `New contact message — ${values.subject}`,
      text: summary,
    });
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Failed to send contact email", error);
    return NextResponse.json(
      { ok: false, error: "Failed to send" },
      { status: 502 }
    );
  }
}
