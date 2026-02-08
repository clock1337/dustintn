import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const TO_EMAIL = "infernohouseweb@gmail.com";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, company, service, budget, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: "DustinTN Contact Form <onboarding@resend.dev>",
      to: TO_EMAIL,
      replyTo: email,
      subject: `New Contact Form: ${name}${company ? ` — ${company}` : ""}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <table style="border-collapse:collapse;width:100%;max-width:600px;">
          <tr><td style="padding:8px 12px;border-bottom:1px solid #eee;font-weight:bold;width:140px;">Name</td><td style="padding:8px 12px;border-bottom:1px solid #eee;">${name}</td></tr>
          <tr><td style="padding:8px 12px;border-bottom:1px solid #eee;font-weight:bold;">Email</td><td style="padding:8px 12px;border-bottom:1px solid #eee;"><a href="mailto:${email}">${email}</a></td></tr>
          ${phone ? `<tr><td style="padding:8px 12px;border-bottom:1px solid #eee;font-weight:bold;">Phone</td><td style="padding:8px 12px;border-bottom:1px solid #eee;"><a href="tel:${phone}">${phone}</a></td></tr>` : ""}
          ${company ? `<tr><td style="padding:8px 12px;border-bottom:1px solid #eee;font-weight:bold;">Company</td><td style="padding:8px 12px;border-bottom:1px solid #eee;">${company}</td></tr>` : ""}
          ${service ? `<tr><td style="padding:8px 12px;border-bottom:1px solid #eee;font-weight:bold;">Service</td><td style="padding:8px 12px;border-bottom:1px solid #eee;">${service}</td></tr>` : ""}
          ${budget ? `<tr><td style="padding:8px 12px;border-bottom:1px solid #eee;font-weight:bold;">Budget</td><td style="padding:8px 12px;border-bottom:1px solid #eee;">${budget}</td></tr>` : ""}
        </table>
        <h3 style="margin-top:24px;">Message</h3>
        <p style="white-space:pre-wrap;background:#f9f9f9;padding:16px;border-radius:8px;">${message}</p>
        <hr style="margin-top:32px;border:none;border-top:1px solid #eee;" />
        <p style="color:#999;font-size:12px;">Sent from the DustinTN contact form</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again." },
      { status: 500 }
    );
  }
}
